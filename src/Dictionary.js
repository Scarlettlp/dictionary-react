import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, SetKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }
  function search(){
    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiURL).then(handleResponse);

  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
    
  }

  function handleKeywordChange(event) {
    SetKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {

   return (
    <div className="Dictionary">
      <section>
        
        <form onSubmit={handleSubmit}>
          <input
            className="form-control form-control-sm"
            type="search"
            onChange={handleKeywordChange}
            placeholder="Which word would you want to learn today?"
          />
        </form>
        <span className="suggestion">
          "The limits of my language are the limits of my world" L.W. Expand
          your world through vocabulary.
        </span>
      </section>
      <Results results={results} />
    </div>
  );
} else {
  load();
  return "Loading";
}
}
