import React from "react";
import "./App.scss";
import Home from "./pages/Home/Home";
import Watch from "./pages/watch/Watch";
import Registre from "./pages/registrer/Registre";
import Login from "./pages/login/Login";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/watch" element={<Watch />} />
      <Route path="/register" element={<Registre/>} />
    </Routes>
  );
};

export default App;
