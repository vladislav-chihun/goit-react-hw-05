import { useState, useEffect, useRef } from "react";
import { Link, NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { movieDetails } from "../../movies-api";
import css from "./MovieDetailsPage.module.css";

export default function MovieDetailsPage() {
    const [movie, setMovie] = useState(null);
    const { movieId } = useParams();
    const location = useLocation();
    const backLinkRef = useRef(location.state?.from ?? '/');

    useEffect(() => {
        if (!movieId) return;

        const fetchMovieDetails = async () => {
            try {
                const details = await movieDetails(movieId);
                setMovie(details);
            } catch (error) {
                console.error('Error fetching movie details:', error);
            }
        };

        fetchMovieDetails();
    }, [movieId]);

    const defaultImg = 'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';

    return (
        <div>
            {movie && (
                <>
                    <p>
                        <Link to={backLinkRef.current} className={css.goBackBtn}>Go Back</Link>
                    </p>
                    
                    <div className={css.detailsContainer}>
                        <img 
                            src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : defaultImg} 
                            width={250} 
                            alt={movie.title} 
                            className={css.detailsPoster} 
                        />
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
                        <li><NavLink to="cast" state={{ from: location.state }} className={css.castLink}>Cast</NavLink></li>
                        <li><NavLink to="reviews" state={{ from: location.state }} className={css.reviewsLink}>Reviews</NavLink></li>
                    </ul>
                    <Outlet />
                </>
            )}
        </div>
    );
}
