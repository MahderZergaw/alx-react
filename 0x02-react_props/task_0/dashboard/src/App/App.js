import React from "react";
import logo from "../assets/holberton-logo.jpg";
import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import { getFullYear, getFooterCopy } from "../utils/utils";

function App() {
  return (
<React.Fragment>
  <Notification/>
  <div className="App">
    <Header/>
    <Login/>
    <Footer/>
  </div>
</React.Fragment>
  );
}

export default App;
