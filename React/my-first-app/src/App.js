import logo from './lisa.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello</h1>
        <img src={logo} alt="lisa" className="App-pic" />
        <h2>My name is Lisa</h2>
        <p>I'm a front-end developer</p>
      </header>
    </div>
  );
}

export default App;
