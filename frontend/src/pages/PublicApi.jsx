import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function PublicApi() {
    const navigate = useNavigate(); //calling use navigate and getting back a function, saving the function into a varibale called navigate
                                    //later when someone clicks a movie we'll call navigate to send them to that url
                                    // the way i think about it is like saying hey react router give me a remote control for changing pages and navigate is the remote
    
    
    // Create a piece of memory  for this page and start it as an empty array [] . Give me two things to work with and ill call the current value movies and ill call the function that updates it set movies 
    const [movies, setMovies] = useState([]); //the movies varibale holds the list of movies from the api and it starts as an empty array [] 
                                              // and we'll be reading this to display the movies on the page, 
                                              // and then when we get the data from the api we'll call set movies
                                              // to update the movies variable with the data we got from the api,
                                              //  and that will cause the page to re-render and show the movies

    const [loading, setLoading] = useState(true); //the loading variable hold wether we're still waiting on the api and that starts off as true
                                                  // in short: loading exists to give the user a "wait, sums happening" message 
                                                  // instead of an empty screen while the api call is in flight

    useEffect(() => {
      //when the page first loads go to the api, wait for the data, save it in movies, and turn off loading 
        async function fetchMovies() { // defining fetch movies as an aysnc function because we're going to be waiting for the 
                                      // api to give us the data back and we don't want to freeze the page while we wait
            const res = await fetch('https://ghibliapi.vercel.app/films'); // we're fetching the data from the api 
                                                                           // and putting it in our response variable and
                                                                           //  waiting until thats done to move on to the next line 

            const data = await res.json(); // reading the json reponse from the api and converting it into a javascript array we can actually use 
            setMovies(data); //setting our movies var to the data we got back and triggering the publicapi function to rerun and rerender the page
            setLoading(false);
        }
        fetchMovies();
    }, []);// the empty array [] at the end of the use effect is telling react to only run this effect once 
          // when the page first appears
          //preventing infinte loop risk

  // the jsx at the bottom used our new movie value to actually render the movies on the page 
  return (
    <div className="main_body">
      <h1 >Movie</h1>
      <p>
        We have a wide array of movies availible in this public api, have a look around!
      </p>
      {/* <form onSubmit={(e) => e.preventDefault()}
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
      </form> */}

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
          {/* <div className="flex justify-between items-center">
              <button>Prev</button>
              <button>Next</button>
          </div> */}
        </div>
      )}
    </div>
  )
}
