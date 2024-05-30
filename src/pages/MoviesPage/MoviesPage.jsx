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

    const handleSearch = e => {
        e.preventDefault();
        const searchForm = e.currentTarget;
        setSearchParams({ movieName: searchForm.elements.movieName.value });
        searchForm.reset();
    };

  

  return (
    <section>
      <SearchField onSubmit={handleSearch} />
      {searchedMovies.length > 0 && <MovieList data={searchedMovies} />}
    </section>
  );
}
