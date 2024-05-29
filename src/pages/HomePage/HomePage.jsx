import { useEffect, useState } from "react";
import { MoviesInfo } from "../../movies-api";
import { Link } from "react-router-dom";
import MovieList from "../../components/MovieList/MovieList";

export default function HomePage() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        MoviesInfo().then((data) => {
            console.log(data.results);
            setMovies(data.results);
        });
    }, []);

    return (
        <MovieList/>
    );
}
