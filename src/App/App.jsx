import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AboutUs from "../About Us/AboutUs";
import Contact from "../Contact Us/Contact";
import Home from "../Home/Home";
import Instructors from "../Instructors/Instructors";

import Landing from "../Landing/Landing";
import Login from "../Login/Login";
import Payments from "../Payment/Payments";
import Profile from "../Profile/Profile";
import SignUp from "../SignUp/SignUp";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/profile/aswinasok">
            <Profile />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/contact-us">
            <Contact />
          </Route>
          <Route path="/instructors">
            <Instructors />
          </Route>
          <Route path="/about-us">
            <AboutUs />
          </Route>
          <Route path="/payments">
            <Payments />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
