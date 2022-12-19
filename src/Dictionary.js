import React, { useState } from "react";
import axios from "axios";
import "./Dictionary";

export default function Dictionary() {
  let [searching, setSearching] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searching}`;
    axios.get(apiUrl).then(handleResponse);
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
