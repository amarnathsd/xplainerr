import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import Header from "./components/header";
import Landingpage from "./screens/landingpage";
import AtoZPricing from "./screens/Atozpricing";
import Uxdesigning from "./screens/uxdesigning";
function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/Atozpricing" element={<AtoZPricing/>} />
          <Route path="/uxdesigning" element={<Uxdesigning/>} />
          <Route path="/Landingpage" element={<Landingpage />} />
        </Routes>
    </Router>
  );
}

export default App;
