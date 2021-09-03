import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';

import './components/button.js';
import './components/button.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavBar/>
        <img src={logo} className="App-logo" alt="logo" />
    
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
