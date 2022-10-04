import React from "react";

export function Name(props) {

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
                    <div className="cart-amount">{props.totalItems}</div>
                </div>
            </div>
        </div>
    )
}