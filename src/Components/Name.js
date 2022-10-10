import React from "react";
import {useSelector} from "react-redux";

export function Name(props) {
    let amount=useSelector(state =>state.foods.amountChoosedFoods)
    // let amount=Object.keys(localStorage).length
    // console.log(amount)
    return(
        <div className="section section-description">
            <div>
                <div className="page-title">
                    Food Menu
                </div>
                <div className="cafe-name">Faiza Brix Restaurent</div>
            </div>
            <div className="cart">
                <div className="icon-place">
                    <img src={require('../assets/images/shopping-cart-icon.svg').default} alt="" className="icon-cart"/>
                    <div className="cart-amount">{amount}</div>
                </div>
            </div>
        </div>
    )
}