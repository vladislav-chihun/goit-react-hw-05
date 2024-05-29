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
            {isLoading && <p>Loading...</p>}
            <MovieList query={5} />
        </div>
        
    )
}