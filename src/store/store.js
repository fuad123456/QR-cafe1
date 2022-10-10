import {configureStore} from '@reduxjs/toolkit'
import foodSlice from "../features/foodSlice";
import orderSlice from "../features/orderSlice";

export const store=configureStore({
    reducer:{
        foods:foodSlice,
        orders:orderSlice
    },
})