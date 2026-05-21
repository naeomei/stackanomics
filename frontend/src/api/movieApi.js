const baseURL = 'https://ghibliapi.vercel.app/films'

export async function getAllMovies() { 
    const res = await fetch(baseURL);
    const data = await res.json();
    return data
}

export async function getMovieById(movieId) { 
    const res = await fetch(`${baseURL}/${movieId}`);
    const data = await res.json();
    return data
}