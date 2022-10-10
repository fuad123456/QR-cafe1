import {createSlice} from "@reduxjs/toolkit";
import {Data} from "../assets/data/Data";

const data = Data['BURGERS'].menuData

function chooseFood(obj) {
    let newObj = {}
    for (let key in obj) {
        for (let i = 0; i < obj[key].menuData.length; i++) {
            newObj[obj[key].menuData[i].name] = false
        }
    }
    return newObj
}

const initialState = {
    foods: data,
    fullFoods: Data,
    classCategories: '',
    amountChoosedFoods: 0,
    choosed: chooseFood(Data),
    isChoose: false,
}
export const foodSlise = createSlice({
    name: 'foods',
    initialState,
    reducers: {
        filterFood: (state, action) => {
            state.foods = state.fullFoods[action.payload].menuData
        },
        setCategories: (state, action) => {
            let ar = {}
            for (let key in Data) {
                ar[key] = Data[key].class
            }
            for (let key in ar) {
                ar[key] = ''
                if (action.payload === key) {
                    ar[key] = 'filter-active'
                }
            }
            state.classCategories = ar
        },
        setAmountChoosedFoods: (state, action) => {
            let ar=[]
            ar.push(action.payload)
            state.amountChoosedFoods=Object.keys(localStorage).length
        },
        setChoose: (state, action) => {
            if (state.choosed[action.payload]) {
                state.choosed[action.payload] = false

            } else {
                state.choosed[action.payload] = true
            }
        },
        updateData: (state)=>{
            state.amountChoosedFoods=Object.keys(localStorage).length
        }
    }
})
export const {filterFood, setCategories, setAmountChoosedFoods, setChoose,updateData} = foodSlise.actions
export default foodSlise.reducer