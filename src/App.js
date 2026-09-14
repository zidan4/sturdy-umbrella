import logo from './logo.svg';
import './App.css';
import  { Greet }  from './components/greet';
import GreetClass from './components/Greet';
import Pro from './components/Pro.mjs';
import Cl from './components/cl'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Greet />
          <GreetClass />
          <Pro name="Pablovic" />
          <Cl name='eryc' />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
