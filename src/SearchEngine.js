import React, { useState } from "react";
import "./App.css";

function SearchEngine({ searched }) {
  const [query, setQuery] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    searched(query);
  }
  function handleQuery(event) {
    setQuery(event.target.value);
  }
  return (
    <form className="handle-submit" onSubmit={handleSubmit}>
      <input
        onChange={handleQuery}
        value={query}
        type="search"
        placeholder="Search city"
      />
      <button>Search</button>
    </form>
  );
}
export default SearchEngine;