import { useEffect, useState } from "react";
import { trendMovies } from "../../movies-api";
import MovieList from "../../components/MovieList/MovieList";

export default function HomePage() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchTrendMovies = async () => {
            setIsLoading(true);
            try {
                const data = await trendMovies();
                setMovies(data.results);
                setError(false);
            } catch (error) {
                console.error('Error fetching trend movies:', error);
                setError(true);
            } finally {
                setIsLoading(false);
            }
        };

        fetchTrendMovies();
    }, []);

    return (
        <div>
            {isLoading && <p>Loading...</p>}
            {error && <p>There was an error loading the movies. Please try again later.</p>}
            {!isLoading && !error && <MovieList movies={movies} />}
        </div>
    );
}
