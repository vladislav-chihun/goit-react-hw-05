import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieCast } from "../../movies-api";
import css from "./MovieCast.module.css"

export default function MovieCast() {
    const [cast, setCast] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        if (!movieId) return;

        const fetchMovieCast = async () => {
            try {
                const castData = await movieCast(movieId);
                setCast(castData.cast);
            } catch (error) {
                console.error('Error fetching movie cast:', error);
            }
        };

        fetchMovieCast();
    }, [movieId]);

    return (
        <ul className={css.castContainer}>
            {cast.map(member => (
                <li key={member.cast_id}>
                    <img src={`https://image.tmdb.org/t/p/w200${member.profile_path}`} alt={member.name} />
                    <p className={css.text}>{member.name}</p>
                    <p className={css.text}>{member.character}</p>
                </li>
            ))}
        </ul>
    );
}
