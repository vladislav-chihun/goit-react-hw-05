import {useLocation} from 'react-router-dom'
import MovieList from "../../components/MovieList/MovieList";

export default function HomePage() {
    const location = useLocation();
    return (
        <MovieList state={{ from: location }}/>
    );
}
