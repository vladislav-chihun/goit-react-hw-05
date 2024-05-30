import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieCast } from "../../movies-api";

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
        <ul>
            {cast.map(member => (
                <li key={member.cast_id}>
                    <img src={`https://image.tmdb.org/t/p/w200${member.profile_path}`} alt={member.name} />
                    <p>{member.name}</p>
                    <p>{member.character}</p>
                </li>
            ))}
        </ul>
    );
}
