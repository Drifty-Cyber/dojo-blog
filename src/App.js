import './App.css';
import Navbar from './Navbar';
import Home from './Home';

export function App() {
  // const title = 'Welcome to my Blog';
  // const likes = 50;
  // const link = `https://www.google.com`;

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export function MyButton() {
  return <button>I'm a button</button>;
}

// export default App;
