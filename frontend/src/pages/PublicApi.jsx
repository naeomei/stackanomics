import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getAllMovies } from '../api/movieApi'

export default function PublicApi() {
    const navigate = useNavigate();     
    
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        async function fetchMovies() { 
            const data = await getAllMovies()
            setMovies(data); 
            setLoading(false);
        }
        fetchMovies();
    }, []);

  return (
    <div className="main_body">
      <h1 >Movie</h1>
      <p>
        We have a wide array of movies availible in this public api, have a look around!
      </p>

      {loading ? (
        <p>Loading movies...</p>
      ) : (
        <div className="grid gap-4">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="group hover:cursor-pointer"
              onClick={() => navigate(`/movie/${movie.id}`)}
            >
              <div className='flex gap-4'>
                  <img
                  src={movie.image}
                  alt={movie.title}
                  className="h-40 object-cover mb-4 border-4 border-white"
                  />
                  <div>
                      <div className="flex justify-between items-center">
                      <h2>{movie.title}</h2>
                      <label>{movie.rt_score / 10}/10</label>
                      </div>

                      <label>{movie.director}</label>
                      <p className='mt-5 line-clamp-3'>{movie.description}</p>
                  </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
