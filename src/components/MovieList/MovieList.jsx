import { useEffect, useState } from "react";
import { searchMovie, trendMovies } from "../../movies-api";
import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

export default function MovieList({ query }) {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      if (!query) {
        const data = await trendMovies();
        setIsLoading(false)
        setMovies(data.results);
      } else {
        const data = await searchMovie(query);
        setMovies(data.results);
        setIsLoading(false)
        
      }
    };

    fetchMovies();
  }, [query]);

  return (
    <div>
      
      {!isLoading && <ul className={css.filmList}>
        {movies.length === 0 && <p>There are no movies with this request. Please, try again.</p>}
        {isLoading && <p>Loading...</p>}
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
      </ul> }
      
    </div>
  );
}
