import { useParams } from 'react-router-dom';
import placeholder from '../assets/totoro.jpg'
import { useState, useEffect } from 'react'
import { getMovieById } from '../api/movieApi'
import { getReviewByMovie } from '../api/reviewApi'

export default function SelectMovie() {
    const { movieId } = useParams(); 
    
    const [movie, setMovies] = useState(null);
    const [reviews, setReviews] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const movies = await getMovieById(movieId) 
            const reviews = await getReviewByMovie(movieId) 
            setReviews(reviews)
            setMovies(movies);
            setLoading(false);
        }
        fetchData();
    }, []);
  return (
    <div>

      <div className="main_body">
        {loading ? (
                <p>Loading...</p>
            ) : (
            <div>
                <img
                    src={movie.movie_banner}
                    alt={movie.title}
                    className='w-full max-h-80 mb-4'
                />
                <div className='flex gap-4'>

                    <img
                    src={movie.image}
                    alt={movie.title}
                    className="w-60 object-cover mb-4"
                    />
                    <div>
                        <h2>{movie.title}</h2>
                        <label>({movie.original_title_romanised})</label>
                            <ul className="columns-2">
                                <li>Rating: {movie.rt_score / 10}/10</li>
                                <li>Release date: {movie.release_date}</li>
                                <li>Director: {movie.director}</li>
                                <li>Producer: {movie.producer}</li>
                            </ul>
                        <p className='mt-5'>{movie.description}</p>   
                    </div>
                </div>
                <div>
                    {reviews.map((review) => (
                        <div className='group '>
                            <div className="flex justify-between items-center">
                                <h2>{review.title}</h2>
                                <label>{review.rating}/5</label>
                            </div>
                            <label>creation date?:{review.created_at}</label>
                            <p className='mt-5 line-clamp-3'>{review.body}</p>
                            <p>- {review.reviewer} ({review.id})</p>
                        </div>
                    ))}
                    <form className='group'>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            placeholder="Title"
                        />
                        <input
                            type="number"
                            min="1" max="10"
                            id="rating"
                            name="rating"
                            placeholder="rating / 5"
                        />
                        <textarea
                            type="text"
                            id="body"
                            name="body"
                            placeholder="body"
                        />
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="name"
                        />
                        <button type="submit">Create</button>
                    </form>
                    <div className="flex justify-between items-center">
                        <button>Prev</button>
                        <button>Next</button>
                    </div>

                </div>

            </div>
            )}
      </div>/

    </div>
  )
}
