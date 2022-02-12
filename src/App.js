import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material/styles";
// import page components
import Create from "./pages/Create.js";
import Login from "./pages/Login.js";
import Home from "./pages/Home.js";
import Signup from "./pages/Signup.js";
import Profile from "./pages/Profile.js";

function App() {
  return (
    // Router below will display the component which matches URL in browser
    // base is http://localhost:3000
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/Create" component={Create} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
