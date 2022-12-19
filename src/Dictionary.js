import React, { useState } from "react";
import "./Dictionary";

export default function Dictionary() {
  let [searching, setSearching] = useState(null);
  function search(event) {
    event.preventDefault();
    alert(`Searching for ${searching}`);
  }

  function handleSearchingChange(event) {
    setSearching(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          autoFocus={true}
          onChange={handleSearchingChange}
        />
      </form>
    </div>
  );
}
