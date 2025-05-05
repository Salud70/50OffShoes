import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Articulo from "./pages/Articulo";

function Navbar() {
  return (
    <nav style={{ padding: "1rem 2rem", background: "white", borderBottom: "1px solid #e5e7eb" }}>
      <h1 style={{ margin: 0, fontWeight: "600", fontSize: "1.25rem" }}>
        <Link to="/" style={{ textDecoration: "none", color: "#1f2937" }}>50% Off Shoes</Link>
      </h1>
    </nav>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articulo/:id" element={<Articulo />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
