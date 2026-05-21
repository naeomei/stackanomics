import { useParams, useNavigate } from 'react-router-dom';
import placeholder from '../assets/totoro.jpg'
import { useState, useEffect } from 'react'
import { getMovieById } from '../api/movieApi'
import { updateReview, getReviewById } from '../api/reviewApi'

export default function ReviewUpdate() {
    const navigate = useNavigate();
    const { reviewId } = useParams(); 
    const [review, setReview] = useState(null);

    async function handleSubmit(formData) {
        await updateReview(reviewId, formData);
        navigate(`/movie/${review.film_id}`)
    }

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const review = await getReviewById(reviewId);
            setReview(review);
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
                <form className='group' action={handleSubmit}>
                    <input
                        type="text"
                        maxLength="200" 
                        minLength="1"
                        id="title"
                        name="title"
                        placeholder="Title"
                        defaultValue={review.title}
                        required
                    />
                    <input
                        type="number"
                        min="1" max="5"
                        id="rating"
                        name="rating"
                        placeholder="rating / 5"
                        defaultValue={review.rating}
                        required
                    />
                    <textarea
                        type="text"
                        id="body"
                        minLength="1"
                        name="body"
                        placeholder="body"
                        defaultValue={review.body}
                        required
                    />
                    <input
                        type="text"
                        id="reviewer"
                        maxLength="100" 
                        minLength="1"                            
                        name="reviewer"
                        placeholder="reviewer"
                        defaultValue={review.reviewer}
                        required
                    />
                    <button type="submit">Update</button>
                </form>
            </div>
            )}
      </div>/

    </div>
  )
}
