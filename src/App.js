import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Chanea's Dictionary App</header>
        <main>
          <Dictionary defaultKeyword="Hello" />
        </main>
        <footer className="App-footer">
          <small>Coded by Chanea Hamilton</small>
        </footer>
      </div>
    </div>
  );
}
