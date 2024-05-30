import { useEffect, useState } from "react";
import { searchMovie, trendMovies } from "../../movies-api";
import { Link } from "react-router-dom";

export default function MovieList({ query }) { 
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        if (!query) {
            trendMovies().then((data) => {
                setMovies(data.results);
            });
        } else {
            searchMovie(query).then((data) => { 
                setMovies(data.results);
            });
        }
    }, [query]); 

    return (
        <div>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>
                        <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
