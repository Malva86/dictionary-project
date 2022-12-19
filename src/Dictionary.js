import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary";

export default function Dictionary() {
  let [searching, setSearching] = useState(null);
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
    console.log(response.data[0].meanings[0].definitions[0].definition);
    setResults(response.data[0]);
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
      <Results results={results} />
    </div>
  );
}
