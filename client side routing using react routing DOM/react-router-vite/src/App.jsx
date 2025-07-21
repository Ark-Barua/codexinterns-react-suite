import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <nav style={{ padding: 20, backgroundColor: "#1e90ff" }}>
        <Link to="/" style={{ marginRight: 10, color: "white" }}>
          Home
        </Link>
        <Link to="/about" style={{ marginRight: 10, color: "white" }}>
          About
        </Link>
        <Link to="/contact" style={{ marginRight: 10, color: "white" }}>
          Contact
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
