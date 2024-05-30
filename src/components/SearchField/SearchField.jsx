import { useState } from "react";

export default function SearchField({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    
    setQuery(event.target.value);
  };

  const handleSearch = (values, actions, event) => {
    event.preventDefault()
    if (values.query.trim() === "") return 
    onSearch(values.query);
    actions.resetForm();
  };

  return (
    <form onSubmit={handleSearch}>
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
