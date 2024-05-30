import { NavLink } from "react-router-dom";
import clsx from 'clsx';
import css from "./Navigation.module.css";

export default function Navigation() {
    return (
        <ul className={css.navContainer}>
            <li className={css.navHomeContainer}>
                <NavLink 
                    to="/" 
                    className={(props) => clsx(css.navHome, props.isActive && css.active)}
                >
                    Home
                </NavLink>
            </li>
            <li className={css.navMoviesContainer}>
                <NavLink 
                    to="/movies" 
                    className={(props) => clsx(css.navMovies, props.isActive && css.active)}
                >
                    Movies
                </NavLink>
            </li>
        </ul>
    );
}
