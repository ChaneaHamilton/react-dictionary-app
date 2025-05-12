import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">My dictionary App</header>
        <main>
          <Dictionary />
        </main>
        <footer className="text-center">
          <small>Coded by Chanea Hamilton</small>
        </footer>
      </div>
    </div>
  );
}
