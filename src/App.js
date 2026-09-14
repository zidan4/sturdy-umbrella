import './App.css';
import  { Greet }  from './components/greet';
import GreetClass from './components/Greet';
import Pro from './components/Pro.mjs';
import Cl from './components/cl'
import  { Child }  from './components/children'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <Greet />
          <GreetClass />
          <Pro name="Pablovic" />
          <Cl name='eryc' />
        </p>
        <Child>
          <ul>
            <li>first child</li>
            <li>second child</li>
            <li>last child</li>
          </ul>
        </Child>
      </header>
    </div>
  );
}

export default App;
