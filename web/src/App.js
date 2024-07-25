import { useState, useEffect } from "react";
import Router from "./config/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router />
        <ToastContainer />
      </header>
    </div>
  );
}

export default App;
