import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function SearchField({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const [searchParams, setSearchParams] = useSearchParams()
  
  const movieFilter = searchParams.get("movie") ?? ""
console.log(movieFilter)


  return (
    <form onSubmit={onSearch}>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        autoComplete="off"
        autoFocus
        placeholder="Search movie"
      />
      <button type="submit">Search</button>
    </form>
  );
}
