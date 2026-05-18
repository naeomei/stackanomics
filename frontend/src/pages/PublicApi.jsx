import { useNavigate } from 'react-router-dom'
import placeholder from '../assets/totoro.jpg'

const movieList = [
    {
        title: 'Movie Title',
        id: 0,
        rating: 4,
        photo: placeholder,
        desc: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah',
        genre: ['Horror', 'Commedy']
    },
    {
        title: 'Movie Title',
        id: 1,
        rating: 1,
        photo: placeholder,
        desc: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah',
        genre: ['Horror', 'Commedy']
    },
    {
        title: 'Movie Title',
        id: 2,
        rating: 4,
        photo: placeholder,
        desc: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah',
        genre: ['Horror', 'Commedy']
    },
    {
        title: 'Movie Title',
        id: 3,
        rating: 2,
        photo: placeholder,
        desc: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah',
        genre: ['Horror', 'Commedy']
    },  
    {
        title: 'Movie Title',
        id: 4,
        rating: 5,
        photo: placeholder,
        desc: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah',
        genre: ['Horror', 'Commedy']
    },
    {
        title: 'Movie Title',
        id: 5,
        rating: 5,
        photo: placeholder,
        desc: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah',
        genre: ['Horror', 'Commedy']
    },  
    {
        title: 'Movie Title',
        id: 6,
        rating: 5,
        photo: placeholder,
        desc: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah',
        genre: ['Horror', 'Commedy']
    }, 
    {
        title: 'Movie Title',
        id: 7,
        rating: 5,
        photo: placeholder,
        desc: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah',
        genre: ['Horror', 'Commedy']
    },   
]

  function handleClick() {
    alert('You clicked me!');
  }

export default function PublicApi() {
    const navigate = useNavigate();

  return (
    <div className="main_body">
      <h1 >Movie</h1>
      <p>
        We have a wide array of movies availible in this public api, have a look around!
      </p>
      <form onSubmit={(e) => e.preventDefault()}
      >
        <div className='flex'>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Movie Title"
          />
        <button
          type="submit"
          className='mb-5'
        >
          Search
        </button>
        </div>
      </form>

      <div className="grid gap-4">
        {movieList.map((movie) => (
          <div
            key={movie.id}
            className="group hover:cursor-pointer" 
            onClick={() => navigate(`/movie/${movie.id}`)}
          >
            <div className='flex gap-4'>
                <img
                src={movie.photo}
                alt={movie.title}
                className="h-40 object-cover mb-4 border-4 border-white"
                />
                <div>
                    <div className="flex justify-between items-center">
                    <h2>{movie.title}({movie.id})</h2>
                    <label>{movie.rating}/5</label>
                    </div>

                    {movie.genre.map((genre) => (
                        <label>{genre} </label>
                    ))}
                    <p className='mt-5 line-clamp-3'>{movie.desc}</p>  
                    {/* <button onClick={() => navigate(`/movie/${movie.id}`)}>test</button>  */}
                </div>
            </div>
          </div>
        ))}
        <div className="flex justify-between items-center">
            <button>Prev</button>
            <button>Next</button>
        </div>
      </div>
    </div>
  )
}
