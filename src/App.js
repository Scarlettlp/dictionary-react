import './App.css';
import Dictionary from "./Dictionary.js"

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>
          Dictionary
      </h1>
      <p>
        Definitions from <a href='https://dictionaryapi.dev/'>Free Dictionary API</a>
      </p>
      <main>
      <Dictionary/>
      </main>
      <footer className="App-footer">Open source code by Scarlett Lara</footer>
    </div>
    </div>
  );
}

export default App;
