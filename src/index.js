import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="h-screen flex flex-col justify-between">
      <BrowserRouter>
        <NavBar />
        <App />
        <Footer />
      </BrowserRouter>
    </div>
  </React.StrictMode>
);
