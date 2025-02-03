import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import React from "react";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/navbar" element={<Navbar />}  />
          <Route path="/homepage" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
