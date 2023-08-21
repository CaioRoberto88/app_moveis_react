import React from "react";

import { Outlet } from "react-router-dom";

import { ToastContainer } from "react-toastify";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";

//COMPONENTS
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <ToastContainer />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
