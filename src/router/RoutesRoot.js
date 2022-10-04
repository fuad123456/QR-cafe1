import React from "react";

import {Link, Route,Routes} from "react-router-dom";
import {MenuPage} from "../pages/MenuPage";
import {Orders} from "../pages/Orders";

<Routes>
    <Route path='/' element={<MenuPage/>}/>
    <Route pat='/oredrs' element={<Orders/>}/>
</Routes>