import React, {useState} from "react";
import "./Dictionary.css"

export default function Dictionary(){
    let [keyword, SetKeyword] = useState("");
    function search(event){
        event.preventDefault();
        alert (`Searching for ${keyword}`);
    }

    function handleKeywordChange(event){
        SetKeyword(event.target.value);

    }
        return (
          <div className="Dictionary">
            <form onSubmit={search}>
              <input className="form-control form-control-sm"
                type= "search"
                onChange={handleKeywordChange}
                placeholder="Which word would you want to learn today?"
               />
            </form>
          </div>
        ); 
}