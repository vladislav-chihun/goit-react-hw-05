// pages/MoviesPage/MoviesPage.js
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SearchField from "../../components/SearchField/SearchField";
import MovieList from "../../components/MovieList/MovieList";
import { searchMovie } from "../../movies-api";

export default function MoviesPage() {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

    const handleSearch = (query) => {
    setSearchQuery(query);
    setSearchParams({ query });
    };
    
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        setIsError(false);
        const query = searchQuery || searchParams.get("query");
        if (query) {
          const searchedMovies = await searchMovie(query);
          setSearchedMovies(searchedMovies.results);
        }
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
          setLoading(false);
          console.log(searchMovie)
      }
    };

    fetchMovies();
  }, [searchQuery, searchParams]);

  

  return (
    <section>
      <SearchField onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {isError && <p>Error fetching movies</p>}
      {searchedMovies.length > 0 && <MovieList data={searchedMovies} />}
    </section>
  );
}
