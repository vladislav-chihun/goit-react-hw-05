import css from "./SearchField.module.css"
export default function SearchField({ onSubmit }) {
    
    return (
        <form onSubmit={onSubmit} >
            <input type="text" name='movieName' placeholder='Search' className={css.input} />
            <button type='submit' className={css.btn}>Search</button>
        </form>
    )
}
