import { useParams, useNavigate } from 'react-router-dom';
import placeholder from '../assets/totoro.jpg'
import { useState, useEffect } from 'react'
import { getMovieById } from '../api/movieApi'
import moment from 'moment';
import { getReviewByMovie, createReview, deleteReview } from '../api/reviewApi'

export default function SelectMovie() {
    const navigate = useNavigate();

    const { movieId } = useParams(); 
    
    const [movie, setMovie] = useState(null);
    const [reviews, setReviews] = useState(null);
    
    async function loadReviews() {
        const reviews = await getReviewByMovie(movieId);
        setReviews(reviews);
    }

    async function handleSubmit(formData) {
        await createReview(formData);
        await loadReviews();
    }

    async function handleDelete(reviewId) {
        await deleteReview(reviewId)
        await loadReviews();
    }
    

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const movie = await getMovieById(movieId) 
            await loadReviews();
            setMovie(movie);
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
                            <label>{moment(review.created_at).format('DD MMM, YYYY')}</label>
                            <p className='mt-5 line-clamp-3'>{review.body}</p>
                            <div className="flex justify-between items-center">
                                <p>- {review.reviewer} ({review.id})</p>
                                <div>
                                    <button
                                        className='mr-5'
                                        onClick={()=>navigate(`/review/${review.id}`)}>
                                        update
                                    </button>
                                    <button
                                        onClick={()=>handleDelete(review.id)}>
                                        delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                    <form className='group' action={handleSubmit}>
                        <input type="hidden" name="film_id" value={movie.id}></input>
                        <input
                            type="text"
                            maxLength="200" 
                            minLength="1"
                            id="title"
                            name="title"
                            placeholder="Title"
                            required
                        />
                        <input
                            type="number"
                            min="1" max="5"
                            id="rating"
                            name="rating"
                            placeholder="rating / 5"
                            required
                        />
                        <textarea
                            type="text"
                            id="body"
                            minLength="1"
                            name="body"
                            placeholder="body"
                            required
                        />
                        <input
                            type="text"
                            id="reviewer"
                            maxLength="100" 
                            minLength="1"
                            name="reviewer"
                            placeholder="reviewer"
                            required
                        />
                        <button type="submit">Create</button>
                    </form>
                </div>

            </div>
            )}
      </div>/

    </div>
  )
}
