import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { useEffect, useState } from "react";


//pages & components
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import About from "./pages/About"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Preloader from "./components/Pre"
import ScrollToTop from "./components/ScrollToTop"

import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);
 

  return (
    <BrowserRouter>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
