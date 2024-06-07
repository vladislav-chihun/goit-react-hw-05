import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

export default function MovieList({ movies }) {
    const location = useLocation();

    if (movies.length === 0) {
        return <p>There are no movies with this request. Please, try again.</p>;
    }

    return (
        <ul className={css.filmList}>
            {movies.map((movie) => (
                <li key={movie.id}>
                    <Link 
                        to={`/movies/${movie.id}`} 
                        state={{ from: location }} 
                        className={css.listLink}
                    >
                        {movie.title}
                    </Link>
                </li>
            ))}
        </ul>
    );
}
