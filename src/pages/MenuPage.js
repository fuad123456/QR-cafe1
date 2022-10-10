import React from "react";
import 'swiper/css';
import {Card} from "../Components/Card";
import {SwiperOwn} from '../Components/SwiperOwn'
import {Name} from "../Components/Name";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {filterFood, setCategories} from "../features/foodSlice";
import {updateData} from "../features/orderSlice";


export const MenuPage = (props) => {
    const data=useSelector((state)=>state.foods.foods)
        let amount=useSelector(state =>state.foods.amountChoosedFoods)
        console.log(amount)
        const dispatch=useDispatch()
    const filter= (event) => {
        let val = event.currentTarget.dataset.value
        dispatch(filterFood(val))
        dispatch(setCategories(val))
    }
    return (
        <div className="container">
            <Name
            amount={amount}
            />
            <SwiperOwn
                filter={filter}
            />
            {
                data.map(k => <Card
                    key={k.id}
                    name={k.name}
                    url={k.url}
                    id={k.id}
                    price={k.price}
                />)
            }

            <div className="container fixed-bottom h-auto">
                <Link to='/orders' className="btn btn-lg mbgc  mb-4 w-100 wps" onClick={updateData}> Заказы</Link>
            </div>
        </div>
    )
}