// pages/MoviesPage/MoviesPage.js
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SearchField from "../../components/SearchField/SearchField";
import MovieList from "../../components/MovieList/MovieList";
import { searchMovie } from "../../movies-api";

export default function MoviesPage() {
  const [searchedMovies, setSearchedMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const movieFilter = searchParams.get("movie") ?? "";

    const handleSearch = newMovie => {
      searchParams.set("movie", newMovie)
  }

  

  return (
    <section>
      <SearchField onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {isError && <p>Error fetching movies</p>}
      {searchedMovies.length > 0 && <MovieList data={searchedMovies} />}
    </section>
  );
}
