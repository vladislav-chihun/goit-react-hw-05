import { useLocation, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { searchMovie } from "../../movies-api";
import SearchField from "../../components/SearchField/SearchField";
import MovieList from "../../components/MovieList/MovieList";

export default function MoviesPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const movieName = searchParams.get("movieName") ?? "";

    useEffect(() => {
        if (movieName === "") {
            return;
        }

        const getMovieByKeyword = async () => {
            setLoading(true);
            setError(false);
            try {
                const data = await searchMovie(movieName);
                setMovies(data.results);
                if (data.results.length === 0) {
                    setError(true);
                }
            } catch (error) {
                setError(true);
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        getMovieByKeyword();
    }, [movieName]);

    const onSubmit = (e) => {
        e.preventDefault();
        const searchForm = e.currentTarget;
        const movieNameValue = searchForm.movieName.value;

        if (movieNameValue.trim() === "") {
            return;
        }

        setSearchParams({ "movieName": movieNameValue });
        searchForm.reset();
    };

    return (
        <main className="container">
            <div>
                <SearchField onSubmit={onSubmit} />
                {loading && <p>Loading...</p>}
                {error && !loading && <p>There are no movies with this request. Please, try again.</p>}
                {!loading && !error && <MovieList movies={movies} />}
            </div>
        </main>
    );
}
