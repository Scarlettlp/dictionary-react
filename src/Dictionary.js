import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, SetKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiURL).then(handleResponse);

    alert(`Searching for ${keyword}`);
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
    </div>
  );
}
