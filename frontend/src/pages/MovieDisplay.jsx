import { useParams } from 'react-router-dom';
import placeholder from '../assets/totoro.jpg'
import { useState, useEffect } from 'react'

export default function SelectMovie() {
    const { movieId } = useParams(); 
    
    const [movie, setMovies] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchMovies() {
            const res = await fetch(`https://ghibliapi.vercel.app/films/${movieId}`);
            const data = await res.json();
            setMovies(data);
            setLoading(false);
        }
        fetchMovies();
    }, []);
  return (
    <div>

      <div className="main_body">
        {loading ? (
                <p>Loading movies...</p>
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
                                <li>release date: {movie.release_date}</li>
                                <li>Director: {movie.director}</li>
                                <li>Producer: {movie.producer}</li>
                            </ul>
                        <p className='mt-5'>{movie.description}</p>   
                    </div>
                </div>
            </div>
            )}
      </div>/

    </div>
  )
}
