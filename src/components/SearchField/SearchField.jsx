
export default function SearchField({ onSubmit }) {
    
    return (
        <form onSubmit={onSubmit} >
            <input type="text" name='movieName' placeholder='Search'  />
            <button type='submit' >Search</button>
        </form>
    )
}
