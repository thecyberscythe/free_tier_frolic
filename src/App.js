import logo from './components/login_components/frolic.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Learn, Develop and Test in the Clouds with confidence!
        </p>
        <a
          className="App-link"
          href="https://github.com/thecyberscythe/free_tier_frolic"
          target="_blank"
          rel="noopener noreferrer"
        >
          Free-Tier Frolic
        </a>
      </header>
    </div>
  );
}

export default App;
