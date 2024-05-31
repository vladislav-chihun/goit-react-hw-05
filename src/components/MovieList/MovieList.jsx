import { useEffect, useState } from "react";
import { searchMovie, trendMovies } from "../../movies-api";
import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

export default function MovieList({ query, state }) {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchMovies = async () => {
      if (!query) {
        const data = await trendMovies();
        setMovies(data.results);
      } else {
        const data = await searchMovie(query);
        setMovies(data.results);
      }
    };

    fetchMovies();
  }, [query]);

  return (
    <div>
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
    </div>
  );
}
