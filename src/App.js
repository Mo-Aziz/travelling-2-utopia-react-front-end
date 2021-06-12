import React from "react";
import "./App.css";

 
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./components/Homepage/Homepage";

function App() {
  return (
    <>
    <Router>
         
    <Navbar />
    <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/navbar" component={Navbar} />
      </Switch>
    </Router>
   
    </>
  );
}

export default App;
