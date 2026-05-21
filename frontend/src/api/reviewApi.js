const baseURL = 'https://ghibliapi.vercel.app/films'

const test = [{
    film_id : "egg",
    reviewer: "bob", //1 to 100
    rating: 4, //1 to 5
    title: "title", //1 to 200
    body: "body", //1 to infinity
    id: 12,
    created_at: "date time? idk if string or not lol"
    },
    {
    film_id : "egg",
    reviewer: "billy",
    rating: 3,
    title: "title", 
    body: "body",
    id: 5,
    created_at: "date time? idk if string or not lol"
    }
]

export async function getReviewByMovie(movieId) { 
    return test
}

export async function createReview() { 

}

export async function updateReview(reviewId) { 

}

export async function deleteReview(reviewId) { 

}