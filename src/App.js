import React from "react"
import "./App.css";
import {BrowserRouter as Router, Routes, Route} from  "react-router-dom"
import Home  from './component/Home';
import About from './component/About';
import Signin from './component/Signin';
import Header from './component/Header';
import Pagenotfound from './component/pagenotfound';
function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
      <Route path = "/" element = {<Home/>}/>
        <Route path = "/home" element = {<Home/>}/>
        <Route path = "/about" element = {<About/>}/>
        <Route path = "/Signin" element = {<Signin/>}/>
        <Route path = "*" element = {<Pagenotfound/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
