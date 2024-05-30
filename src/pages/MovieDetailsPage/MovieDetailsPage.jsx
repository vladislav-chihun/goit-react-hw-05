import { useState, useEffect } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { movieDetails } from "../../movies-api";

export default function MovieDetailsPage() {
    const [movie, setMovie] = useState(null);
    const { movieId } = useParams();

    useEffect(() => {
        if (!movieId) return;

        const fetchMovieDetails = async () => {
            try {
                const Details = await movieDetails(movieId);
                setMovie(Details);
            } catch (error) {
                console.error('Error fetching movie details:', error);
            }
        };

        fetchMovieDetails();
    }, [movieId]);

    return (
        <div>
            {movie && (
                <>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                    <ul>
                        <li>
                            <h2>{movie.title}</h2>
                            <p>{movie.overview}</p>
                        </li>
                        <li>
                            <h3>Release Date:</h3>
                            <p>{movie.release_date}</p>
                        </li>
                        <li>
                            <h3>Rating:</h3>
                            <p>{movie.vote_average}</p>
                        </li>
                    </ul>
                    <ul>
                        <li><NavLink to="cast">Cast</NavLink></li>
                        <li><NavLink to="reviews">Reviews</NavLink></li>
                    </ul>
                    <Outlet />
                </>
            )}
        </div>
    );
}
