import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieReviews } from "../../movies-api";

export default function MovieReviews() {
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        if (!movieId) return;

        const fetchMovieReviews = async () => {
            try {
                const reviewsData = await movieReviews(movieId);
                setReviews(reviewsData.results);
                console.log(reviews)
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
                    <h3>Author: {review.author_details.username}</h3>
                    <p>{review.content}</p>
                </li>
            ))}
        </ul>
    );
}
