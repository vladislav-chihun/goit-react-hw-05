import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import MovieList from "../../components/MovieList/MovieList"

export default function MoviesPage() {
    const [movieFind, setMovieFind] = useState("")
    const [isLoading, setIsLodaing] = useState(false)
    useEffect(() => {
        
    },[])
    return (
        <div>
            <NavLink ><input type="text" value={movieFind} onChange={e => setMovieFind(e.target.value)} /></NavLink>
            {isLoading && <p>Loading...</p>}
            <MovieList query={5} />
        </div>
        
    )
}