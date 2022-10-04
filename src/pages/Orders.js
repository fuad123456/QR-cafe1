import React, {useState} from "react";
import {OrderItem} from "../Components/OrderItem";
import {TotalAmount} from "../Components/TotalAmount";
import iconPng from '../assets/images/icon-back.svg'
import {MenuPage} from "./MenuPage";
import {Link} from "react-router-dom";

export const Orders = function () {

    let [isOrder, setIsOrder] = useState(false)
    let keys = Object.keys(localStorage);
    let arr = []

    for (let key of keys) {
        arr.push(JSON.parse(localStorage[key]))
    }
    let arr2 = arr.map(el => {
        return {name: el.name, price: +el.price}
    })
    let [totalAmount, setTotalAmount] = useState(arr2)
    console.log(totalAmount)
    return (
        <div className="container">
            <div className='pos-r mb-20'>
                <Link to='/menu'>
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
                url={el.url}
                price={el.price}
                totalAmount={totalAmount}
                setTotalAmount={setTotalAmount}
            />)}
            <div className="mb-300"></div>
            <TotalAmount
                totalAmount={totalAmount}
                setTotalAmount={setTotalAmount}
            />
            <button className="btn btn-lg mbgc fixed-bottom mb-4"
                    onClick={() => {
                        setIsOrder(!isOrder)
                    }}
            > {isOrder ? 'Заказать' : 'Спасибо за покупку '}</button>
        </div>
    )
}