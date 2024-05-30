import { useEffect, useState } from "react";
import SearchField from "../../components/SearchField/SearchField";
import MovieList from "../../components/MovieList/MovieList";

export default function MoviesPage() {
  const [movieFind, setMovieFind] = useState("");
  const [isLoading, setIsLoading] = useState(false);

   const handleSearch = async (topic) => {
    setMovieFind(topic);

  };

  

  return (
    <div>
      <SearchField onSearch={handleSearch} />
      {isLoading && <p>Loading...</p>}
      <MovieList query={movieFind} />
    </div>
  );
}
