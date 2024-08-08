// import { Ro } from "react-router-dom";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import {Project, Skill, About, Contact, Navbar, Hero } from "./components/Index/Index";
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Hero/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/project" element={<Project />}/>
      <Route path="/skill" element={<Skill/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
