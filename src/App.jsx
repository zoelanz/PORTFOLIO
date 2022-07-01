import Home from "./components/Home/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss";
import { useEffect } from "react";

function App() {

  useEffect(() => {

    const cursor = document.querySelector(".cursor");
    document.addEventListener("mousemove", (e) => {
      cursor.setAttribute(
        "style",
        "top: " + (e.pageY ) + "px; left: " + (e.pageX ) + "px;"
      );
    });
  
    return

  }, [])
  
  return (
    <BrowserRouter>
      <div className="App">
      <div class="cursor"></div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
