import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Aside from "./components/Aside/Aside";
import ResetCSS from './assets/css/resetCSS.js';
import Home from "./Pages/Home.js";

export default function App (){
    return (
        <BrowserRouter>
            <ResetCSS/>
            <Routes>
                <Route path="/" element={<Aside />} />
                <Route path="/play" element={<Home />} />
            </Routes> 
        </BrowserRouter>
    );
};