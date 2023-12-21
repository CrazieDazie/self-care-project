import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import  Home from "./Home";
import './App.css';
import Soul from "./Soul";
import SelfCareBody from "./SelfCareBody";



function App() {
  return <Router>
  <nav className="sticky">
    <Link to="/" className="link">Self-Care Ideas</Link>
    <Link to="/soul" className="link">Self-Care for the Soul</Link>
    <Link to="/SelfCareBody" className="link">Self-Care for the Body</Link>
  </nav>

  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/soul" element={<Soul />}/>
    <Route path="/SelfCareBody" element={<SelfCareBody/>}/>
  </Routes>

  </Router>
}

export default App;