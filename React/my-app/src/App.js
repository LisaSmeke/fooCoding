import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello!</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>My name is Lisa.</p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/lisasmeke/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Connect with me on LinkedIn
        </a>
      </header>
    </div>
  );
}

export default App;
