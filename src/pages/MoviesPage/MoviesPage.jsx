import { useState } from "react"

export default function MoviesPage() {
    const [movieFind, setMovieFind] = useState("")
    const [isLoading,setIsLodaing] = useState(false)
    return (
        <div>

            {isLoading && <p>Loading...</p>}
            <ul>
                <li></li>
            </ul>
        </div>
        
    )
}