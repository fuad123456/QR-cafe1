import './style/App.css';
import { Route, Routes} from "react-router-dom";
import {MenuPage} from "./pages/MenuPage";
import {Orders} from "./pages/Orders";
import React from "react";
import HomePage from "./pages/HomePage/HomePages";

export const App = function () {
    return (
        <>
            <Routes>
                <Route path='/'>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='menu' element={<MenuPage/>}/>
                    <Route path='orders' element={<Orders/>}/>
                </Route>
            </Routes>
        </>
    )
}
