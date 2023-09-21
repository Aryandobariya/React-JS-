import React, { useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Button from "react-bootstrap/Button"; // Corrected import
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import "./router.css";
import Login from "./Login";
import Auth from "./Auth";
import Protectrout from "./Protectrout";

export default function Routerr() {
  return (
    <>
      <ul>
        <li>
          <NavLink to={"/"}>Home </NavLink>
        </li>
        <li>
          <NavLink to={"/About"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/Profile"}>Service </NavLink>
        </li>
        <li>
          <NavLink to={"/Login"}>Login </NavLink>
        </li>
      </ul>
      <Auth>
        <Routes>
          <Route path="/" element={<Protectrout   component={<Home/>}/>} />
          <Route path="/About" element={<Protectrout   component={<About/>}/>} />
          <Route path="/Profile" element={<Service />} />
          <Route path="/Login" element={<Login />} />

          {/* <Route path="*" element={<h1> 401 error</h1>} /> */}
        </Routes>
      </Auth>
    </>
  );
}
