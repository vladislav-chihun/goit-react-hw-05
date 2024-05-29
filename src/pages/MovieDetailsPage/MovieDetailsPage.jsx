import { useState } from "react"
import {MoviesApi} from "../../movies-api"
export default function MovieDetailsPage({ movies }) {
    const [movie, setMovie] = useState([])
    const movieId =
    
    
    return (
        <div>
            <img src="" alt="" />
            <ul>
                <li>
                    <h2></h2>
                    <p>{movies.title}</p>
                </li>
                <li>
                    <h3></h3>
                    <p></p>
                </li>
                <li>
                    <h3></h3>
                    <p></p>
                </li>
            </ul>
        </div>
    )
}