import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import Header from "./components/header";
import Landingpage from "./screens/landingpage";

function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Landingpage />} />
        </Routes>
    </Router>
  );
}

export default App;
