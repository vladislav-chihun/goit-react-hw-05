import { useState, useEffect, useRef } from "react";
import { Link, NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { movieDetails } from "../../movies-api";

export default function MovieDetailsPage() {
    const [movie, setMovie] = useState(null);
    const { movieId } = useParams();
    const location = useLocation()
     const backLinkRef = useRef(location.state ?? '/')
    console.log(backLinkRef)

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
                <><p><Link to={backLinkRef.current} >Go Back</Link></p>
                    
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
                        <li><NavLink to="cast" state={{ ...location.state }}>Cast</NavLink></li>
                        <li><NavLink to="reviews" state={{ ...location.state }}>Reviews</NavLink></li>
                    </ul>
                    <Outlet />
                </>
            )}
        </div>
    );
}
