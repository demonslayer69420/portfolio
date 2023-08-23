import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Project from './Components/Project';
import Contact from './Components/Contact';
import About from './Components/About';
import Skills from './Components/Skills';
import Nav from './Components/Nav';

function App() {
  return (
    <div className="App">
      <p className='ver'></p>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Nav/>}>
          <Route index element={<Home />} />
          <Route path="project" element={<Project />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="skills" element={<Skills />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;