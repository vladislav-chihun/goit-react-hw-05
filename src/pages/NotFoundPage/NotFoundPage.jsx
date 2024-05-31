import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css"
export default function NotFoundPage() {
    return (
        <div className={css.notFoundContainer}>There are no movies with this request.<Link to="/" className={css.notFoundLink}>Go Home</Link></div>
    )
}