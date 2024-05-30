import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieReviews } from "../../movies-api";
import css from "./MovieReviews.module.css"

export default function MovieReviews() {
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        if (!movieId) return;

        const fetchMovieReviews = async () => {
            try {
                const reviewsData = await movieReviews(movieId);
                setReviews(reviewsData.results);
            } catch (error) {
                console.error('Error fetching movie reviews:', error);
            }
        };

        fetchMovieReviews();
    }, [movieId,reviews]);

    return (
        <ul className={css.reviewsContainer}>
            {reviews.map(review => (
                <li key={review.id}>
                    <h3>Author: {review.author_details.username}</h3>
                    <p>{review.content}</p>
                </li>
            ))}
        </ul>
    );
}
