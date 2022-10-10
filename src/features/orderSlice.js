import {createSlice} from "@reduxjs/toolkit";
import {Data} from "../assets/data/Data";

const data = Data['BURGERS'].menuData

function getDataFromLS(obj) {
    let keys = Object.keys(localStorage);
    let arr = []

    for (let key of keys) {
        arr.push({name: key, val: JSON.parse(localStorage[key])})
    }
    let arr2 = arr.map(el => {
        return {name: el.name, price: +el.val.price, amount: 1}
    })
    return arr2
}

const initialState = {
    foods: data,
    fullFoods: Data,
    choosedFoodsData: getDataFromLS(),
    amountOfChoosedFood: 1
}
export const foodSlise = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        increaseAmountOfChoosedFood: (state, action) => {
            let keys = Object.keys(localStorage);
            let arr = []

            for (let key of keys) {
                arr.push({name: key, val: JSON.parse(localStorage[key])})
            }
            let arr2 = arr.map(el => {
                return {name: el.name, price: +el.val.price, amount: 1}
            })
            if(state.choosedFoodsData.length===0){
                state.choosedFoodsData=arr2
            }
            state.choosedFoodsData.forEach(el => {
                if (el.name === action.payload) {
                    return el.amount++

                } else {
                   return el
                }
            })

        },
        decreaseAmountOfChoosedFood: (state, action) => {
            let keys = Object.keys(localStorage);
            let arr = []

            for (let key of keys) {
                arr.push({name: key, val: JSON.parse(localStorage[key])})
            }
            let arr2 = arr.map(el => {
                return {name: el.name, price: +el.val.price, amount: 1}
            })
            if(state.choosedFoodsData.length===0){
                state.choosedFoodsData=arr2
            }
            state.choosedFoodsData.forEach(el => {
                if (el.name === action.payload) {
                    if (el.amount >0) {
                        return el.amount--
                    }

                } else {
                    return el
                }
            })

        },
        updateData:(state, action)=>{
            let keys = Object.keys(localStorage);
            let arr = []

            for (let key of keys) {
                arr.push({name: key, val: JSON.parse(localStorage[key])})
            }
            let arr2 = arr.map(el => {
                return {name: el.name, price: +el.val.price, amount: 1}
            })
            state.choosedFoodsData=arr2
        },
        deleteItem:(state,action)=>{
            let keys = Object.keys(localStorage);
            let arr = []

            for (let key of keys) {
                arr.push({name: key, val: JSON.parse(localStorage[key])})
            }
            let arr2 = arr.map(el => {
                return {name: el.name, price: +el.val.price, amount: 1}
            })
            state.choosedFoodsData=arr2
        }
    }
})
export const {increaseAmountOfChoosedFood, decreaseAmountOfChoosedFood,updateData} = foodSlise.actions
export default foodSlise.reducer