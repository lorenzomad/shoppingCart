import React from "react";
import Homepage from "./components/Homepage";
import Store from "./components/Store"; 
import {BrowserRouter, Routes, Route} from "react-router-dom";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/store" element={<Store />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch