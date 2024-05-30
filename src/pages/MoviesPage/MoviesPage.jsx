import { useSearchParams, } from "react-router-dom";
import { useState, useEffect } from "react";
import { searchMovie } from "../../movies-api";
import SearchField from "../../components/SearchField/SearchField";
import MovieList from "../../components/MovieList/MovieList";



export default function MoviesPage() {

  const [searchParams, setSearchParams] = useSearchParams();
 

  const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    
 const movieName = searchParams.get("movieName") ?? "";
  useEffect(() => {
    if (movieName === "") {
      return;
    }
    setLoading(true);
    const getMovieByKeyword = async (movieName) => {
      try {
        const data = await searchMovie(movieName);
        if (!data.results.length) {
          setLoading(false);
            setError(true);
            console.log("error no results")
        }
        setError(false);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getMovieByKeyword(movieName);
  }, [movieName]);

  const onSubmit = (e) => {
    e.preventDefault();
      const searchForm = e.currentTarget;
     
      const movieNameValue = searchForm.movieName.value;
      console.log(movieNameValue)
    if (movieNameValue.trim() === "") {
      return;
    }
    setSearchParams({ "movieName": movieNameValue });
    searchForm.reset();
  };

  return (
    <main className="container">
      <div >
        <SearchField onSubmit={onSubmit} />
        {error && <p>There are no movies with this request. Please, try again.</p>}
        { movieName && <MovieList query={movieName} />}
      </div>
    </main>
  );
}
