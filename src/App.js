import './style/App.css';
import { Route, Routes} from "react-router-dom";
import {MenuPage} from "./pages/MenuPage";
import {Orders} from "./pages/Orders";
import React from "react";
import HomePage from "./pages/HomePage/HomePages";

export const App = function () {
    // localStorage.clear()//

    return (
        <>
            <Routes>
                <Route path='/'>
                    <Route index path='/QR-cafe1' element={<HomePage/>}/>
                    <Route path='menu' element={<MenuPage
                    />}/>
                    <Route path='orders' element={<Orders/>}/>
                </Route>
            </Routes>
        </>
    )
}
