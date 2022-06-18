import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, SetKeyword] = useState("");
  let [results,setResults] = useState(null);
  
  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiURL).then(handleResponse);

  }

  function handleKeywordChange(event) {
    SetKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          className="form-control form-control-sm"
          type="search"
          onChange={handleKeywordChange}
          placeholder="Which word would you want to learn today?"
        />
      </form>
      <Results results={results}/>
    </div>
  );
}
