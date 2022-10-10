import React, {useState} from "react";
import {OrderItem} from "../Components/OrderItem";
import {TotalAmount} from "../Components/TotalAmount";
import iconPng from '../assets/images/icon-back.svg'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {updateData} from "../features/foodSlice";

export const Orders = function () {
    let data=useSelector(state=>state.orders.choosedFoodsData)
    console.log(data)
    let [isDeleted,setIsDeleted]=useState(false)
    let [isOrder, setIsOrder] = useState(false)
    let keys = Object.keys(localStorage);
    let arr = []

    for (let key of keys) {
        arr.push({name: key, val: JSON.parse(localStorage[key])})
    }
    function deleteItem(event) {
        let val=event.target.dataset.value
        setIsDeleted(!isDeleted)
        localStorage.removeItem(val)
    }
    return (
        <div className="container">
            <div className='pos-r mb-20'>
                <Link to='/menu' onClick={updateData}>
                    <div className="icon-place icon-back">
                        <img src={`${iconPng}`} alt="" />
                    </div>
                </Link>
                <div className="page-title text-center">
                    Cart
                </div>
                <div className="text-center">
                    <div className="cafe-name text-center">Rewise Your Order</div>
                </div>
            </div>
            {arr.map((el, i) => <OrderItem
                key={i}
                name={el.name}
                url={el.val.url}
                price={el.val.price}
                obj={ arr}
                deleteItem={deleteItem}
            />)}
            <div className="mb-300"></div>
            <TotalAmount
            />
            <button className="btn btn-lg mbgc fixed-bottom mb-4"
                    onClick={() => {
                        setIsOrder(!isOrder)
                    }}
            > {!isOrder ? 'Заказать' : 'Спасибо за покупку '}</button>
        </div>
    )
}