import { useEffect, useState } from "react";
import { MoviesInfo } from "../../movies-api";
import { Link } from "react-router-dom";

export default function HomePage() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        MoviesInfo().then((data) => {
            console.log(data.results);
            setMovies(data.results);
        });
    }, []);

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
