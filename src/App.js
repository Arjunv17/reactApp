import logo from './logo.svg';
import './App.css';
import Home from './pages/home'
import Navbar from './components/common/header'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Arjun Edit src/App.js and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
