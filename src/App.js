
import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import About from './components/About';
import Tech from './components/Tech';
import Projects from './components/Projects';
import { Route,  } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      
      <Header />
      
      {/* <Nav /> */}
      <hr/>
      <About />
      <hr/>
      <Projects />
      <hr/>
      <Tech />
    </div>
  );
}

export default App;
