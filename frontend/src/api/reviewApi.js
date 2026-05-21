const baseURL = 'http://localhost:8000/reviews'

const test = [{
    "film_id": "string",
    "reviewer": "string",
    "rating": 1,
    "title": "string",
    "body": "string",
    "id": 1,
    "created_at": "2026-05-21T19:44:22.999293Z"
    },
    {
    film_id : "egg",
    reviewer: "billy",
    rating: 3,
    title: "title", 
    body: "body",
    id: 5,
    created_at: "date time?"
    },
    {
    film_id : "egg",
    reviewer: "bob", //1 to 100
    rating: 4, //1 to 5
    title: "title", //1 to 200
    body: "body", //1 to infinity
    id: 12,
    created_at: "date time?"
    },
    {
    film_id : "egg",
    reviewer: "billy",
    rating: 3,
    title: "title", 
    body: "body",
    id: 5,
    created_at: "date time?"
    }
]

export async function getReviewByMovie(movieId) { 
    const res = await fetch(`${baseURL}/movie/${movieId}`);
    const data = await res.json();
    return data
}   

export async function getReviewById(reviewId) { 
    const res = await fetch(`${baseURL}/${reviewId}`);
    const data = await res.json();
    return data
}

export async function createReview(formData) { 
    const rawData = Object.fromEntries(formData.entries());
    const data = {
        ...rawData,
        rating: parseInt(rawData.rating)
    };

    const res = await fetch(baseURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
}

export async function updateReview(reviewId, formData) {    
    const rawData = Object.fromEntries(formData.entries());
    
    const data = {
        ...rawData,
        rating: parseInt(rawData.rating)
    };

    const res = await fetch(`${baseURL}/${reviewId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

}

export async function deleteReview(reviewId) { 
    const res = await fetch(`${baseURL}/${reviewId}`, {
        method: 'Delete'
    });
}