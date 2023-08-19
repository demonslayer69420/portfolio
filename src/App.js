import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Project from './Components/Project';
import Contact from './Components/Contact';
import About from './Components/About';
import Tech from './Components/Tech';
import Nav from './Components/Nav';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Nav/>}>
          <Route index element={<Home />} />
          <Route path="project" element={<Project />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="techstack" element={<Tech />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;