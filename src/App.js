import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cursor from "react-awesome-cursor";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("dark") === "true";
  });

  useEffect(() => {
    localStorage.setItem("dark", darkMode);
    document.body.className = darkMode ? "dark" : "";
  }, [darkMode]);

  return (
    <>
      {/* <Cursor
  color="255,105,180"
  dotSize={12}
  ringSize={32}
  ringAlpha={0.4}
  dotAlpha={1}
  ringScale={1.6}
/> */}
      <Router>
        <Navbar toggleDarkMode={() => setDarkMode(!darkMode)} isDark={darkMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
