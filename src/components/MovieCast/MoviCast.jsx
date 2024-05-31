import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieCast } from "../../movies-api";
import css from "./MovieCast.module.css";

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

    const defaultImg = 'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';

    return (
        <ul className={css.castContainer}>
            {cast.length > 0 ? (
                cast.map(member => (
                    <li key={member.cast_id}>
                        <img src={member.profile_path ? `https://image.tmdb.org/t/p/w500${member.profile_path}` : defaultImg} 
                            width={250} height={375} alt={member.name} />
                        <p className={css.text}>{member.name}</p>
                        <p className={css.text}>{member.character}</p>
                    </li>
                ))
            ) : (
                <p>No Cast</p>
            )}
        </ul>
    );
}
