
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import { Nevbar } from './components/Nevbar';
import Project from './components/Project';
import Skill from './components/Skill';
// import { Testing } from './components/Testing';
// import $ from 'jquery';

function App() {
  return (
    <div className="App">
      <Nevbar />
      <Home />
      <About />
      <Project />
      <Skill />
      <Contact />
      <Footer />
      {/* <Testing /> */}
    </div>
  );
}

export default App;
