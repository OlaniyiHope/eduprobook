import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  createBrowserRouter,
} from "react-router-dom";
import Home from "./Home/Home";

import Details from "./Home/Details";

import Booking from "./Home/Booking";
import Test from "./Test";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/test" element={<Test />} />
          <Route exact path="/book-details/:id" element={<Booking />} />
          <Route exact path="/booking/:id" element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
