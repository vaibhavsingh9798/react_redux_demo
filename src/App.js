import logo from './logo.svg';
import './App.css';
import Counter from './component/Counter';
import Authentication from './component/Authentication';

function App() {
  return (
    <div className="App">
      <h1>Redux</h1>
      <Authentication/>
      <Counter/>
    </div>
  );
}

export default App;
