import About from './Components/About/About';
import Games from './Components/Games/Games';
import Home from './Components/Home/Home';
import Navbar from './Components/Navigation/Navbar';
import Title from './Components/Title/Title';
import './index.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Title subtitle='GAME VARIATIONS' title="Let your kid learn to have fun"/>
      <Games/>
      <Title subtitle='GROWTH BACKGROUND' title="The routes of Our Dev't"/>
      <About/>
    </div>
  );
}

export default App;
