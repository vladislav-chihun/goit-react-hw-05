import { useSearchParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { searchMovie } from "../../movies-api";
import SearchField from "../../components/SearchField/SearchField";
import MovieList from "../../components/MovieList/MovieList";



export default function MoviesPage() {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get("movieName") ?? "";
  const [moviesList, setMoviesList] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (movieName === "") {
//       return;
//     }
//     setMoviesList([]);
//     setLoading(true);
//     const getMovieByKeyword = async (movieName) => {
//       try {
//         const data = await searchMovie(movieName);
//         if (!data.results.length) {
//           setLoading(false);
//           setError(true);
//           return notify("There are no movies with this request. Please, try again.");
//         }
//         setError(false);
//         setMoviesList(data.results);
//         setLoading(false);
//       } catch (error) {
//         notify("Something went wrong. Please, try again!");
//         console.log(error);
//       }
//     };
//     getMovieByKeyword(movieName);
//   }, [movieName]);

  const onSubmit = (e) => {
    e.preventDefault();
    const searchForm = e.currentTarget;
    const movieNameValue = searchForm.elements.movieName.value;
    if (movieNameValue.trim() === "") {
      return;
    }
    setSearchParams({ movieName: movieNameValue });
    searchForm.reset();
  };

  return (
    <main className="container">
      <div >
        <SearchField onSubmit={onSubmit} />
        {error && <p>There are no movies with this request. Please, try again.</p>}
        {/* <MovieList movies={moviesList} location={location} /> */}
      </div>
    </main>
  );
}
