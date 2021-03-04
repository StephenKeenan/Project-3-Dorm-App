
import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Dashboard from "./components/dashboard";
import Colleges from "./components/colleges";
import Login from "./components/login";
import Searches from "./components/searches";
import Header from "./components/header";
import Footer from "./components/footer";
import "./App.css";


function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Route exact path="/" component={Dashboard}></Route>
        <Route exact path="/searches" component={Searches}></Route>
        <Route exact path="/colleges" component={Colleges}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Footer/>
      </div>
    </Router>
  )
}
export default App;
