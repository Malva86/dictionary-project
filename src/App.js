import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Dictionary />
        <footer>
          <p>
            Code created by Maliwina Flis. It is open-sourced at{" "}
            <a href="https://github.com/Malva86/dictionary-project">GitHub</a>{" "}
            and hosted at{" "}
            <a href="https://fluffy-parfait-f22f58.netlify.app/">Netlify</a>.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
