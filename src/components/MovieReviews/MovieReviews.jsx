import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieReviewsApi } from "../../movies-api";

export default function MovieReviews() {
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        if (!movieId) return;

        const fetchMovieReviews = async () => {
            try {
                const reviewsData = await MovieReviewsApi(movieId);
                setReviews(reviewsData.results);
            } catch (error) {
                console.error('Error fetching movie reviews:', error);
            }
        };

        fetchMovieReviews();
    }, [movieId]);

    return (
        <ul>
            {reviews.map(review => (
                <li key={review.id}>
                    <h3>{review.author}</h3>
                    <p>{review.content}</p>
                </li>
            ))}
        </ul>
    );
}
