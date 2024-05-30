import { useState, useEffect, useRef } from "react";
import { Link, NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { movieDetails } from "../../movies-api";
import css from "./MovieDetailsPage.module.css"

export default function MovieDetailsPage() {
    const [movie, setMovie] = useState(null);
    const { movieId } = useParams();
    const location = useLocation()
     const backLinkRef = useRef(location.state ?? '/')

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
        <div >
            {movie && (
                <><p><Link to={backLinkRef.current} className={css.goBackBtn}>Go Back</Link></p>
                    
                    <div className={css.detailsContainer}>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className={css.detailsPoster} />
                        <ul className={css.descriptionContainer}>
                        <li>
                            <h2 className={css.movieTitle}>{movie.title}</h2>
                            <p className={css.text}>{movie.overview}</p>
                        </li>
                        <li>
                            <h3 className={css.text}>Release Date:</h3>
                            <p className={css.text}>{movie.release_date}</p>
                        </li>
                        <li>
                            <h3 className={css.text}>Rating:</h3>
                            <p className={css.text}>{movie.vote_average}</p>
                        </li>
                        </ul>
                    </div>
                    <ul className={css.miscDescription}>
                        <li><NavLink to="cast" state={{ ...location.state }} className={css.castLink}>Cast</NavLink></li>
                        <li><NavLink to="reviews" state={{ ...location.state }} className={css.reviewsLink}>Reviews</NavLink></li>
                    </ul>
                    <Outlet />
                </>
            )}
        </div>
    );
}
