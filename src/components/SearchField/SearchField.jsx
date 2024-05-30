// components/SearchField/SearchField.js
import { useState } from "react";
import PropTypes from "prop-types";

export default function SearchField({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (typeof onSearch === 'function') {
      onSearch(query);
    } else {
      console.error("onSearch is not a function");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

SearchField.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
