// components/MovieList/MovieList.js
import { useEffect, useState } from "react";
import { searchMovie, trendMovies } from "../../movies-api";
import { Link } from "react-router-dom";

export default function MovieList({ query }) {
  const [movies, setMovies] = useState([]);

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
