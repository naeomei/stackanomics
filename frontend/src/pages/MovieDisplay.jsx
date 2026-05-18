import { useParams } from 'react-router-dom';
import placeholder from '../assets/totoro.jpg'
const movie = {
        title: 'Movie Title',
        id: 0,
        rating: 4,
        photo: placeholder,
        desc: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah',
        genre: ['Horror', 'Commedy']
    }

export default function SelectMovie() {
    const { movieId } = useParams(); 
  return (
    <div>
      <div className="main_body">
        <p>Viewing Movie ID: {movieId}</p>

        <div className='flex gap-4'>
            <img
            src={movie.photo}
            alt={movie.title}
            className="w-60 object-cover mb-4 border-4 border-white"
            />
            <div>
                <h2>{movie.title}</h2>
                <label>{movie.rating}/5</label>
                <br/>
                {movie.genre.map((genre) => (
                    <label>{genre} </label>
                ))}
                <p className='mt-5'>{movie.desc}</p>   
            </div>
        </div>


      </div>

    </div>
  )
}
