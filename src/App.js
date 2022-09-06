import React from "react"
import "./App.css";
import {BrowserRouter as Router, Routes, Route} from  "react-router-dom"
import Home  from './component/Home';
import Signin from './component/Signin';
import Header from './component/Header';
import Pagenotfound from './component/pagenotfound';
import Product from "./component/Product";
import Register from './component/Register';
function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
      <Route path = "/" element = {<Signin/>}/>
      <Route path = "/home" element = {<Home/>}/>
      <Route path = "/Product" element = {<Product/>}/>
      <Route path = "/register" element = {<Register/>}/>
      <Route path = "/Signin" element = {<Signin/>}/>
      <Route path = "*" element = {<Pagenotfound/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
