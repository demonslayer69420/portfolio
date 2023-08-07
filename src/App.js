import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Project from './Components/Project';
import Contact from './Components/Contact';
import Nav from './Components/Nav';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Nav/>}>
          <Route index element={<Home />} />
          <Route path="Project" element={<Project />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;