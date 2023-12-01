import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <Dictionary defaultKeyword="Sunset" />
      <footer>
        This project was coded by Marisa Salazar and is open-sourced on
        <a
          className="App-link text-center mt-3"
          href="https://github.com/Marisa-Salazar/Dictionary-React-App"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Github{" "}
        </a>
      </footer>
    </div>
  );
}

export default App;
