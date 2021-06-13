import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
 import Home from "./pages/Home"
import Services from "./pages/Services";
import Products from "./pages/Products";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>   
          <Route exact path="/" component={Home} /> 
          <Route path="/services" component={Services} />
          <Route path="/products" component={Products} />
          <Route path="/signup" component={SignUp} />
          <Route path="/navbar" component={Navbar} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
