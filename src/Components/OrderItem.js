import React from "react";
import {OrderAmount} from "./OrderAmount";


export function OrderItem(props) {

    return (
        <div className="card-item ">
            <div className="card mb-3 bdr">
                <button className="btn btn-close">
                    {/*<img src={require("../assets/images/close-card.svg").default} alt="" className="card-close"/>*/}
                </button>
                <div className="row g-2">
                    <div className="col-auto dfx">
                        <div className="image-box"
                             style={{backgroundImage: `url(${props.url})`, backgroundRepeat: 'no-repeat'}}></div>
                    </div>
                    <div className="col dfx">
                        <div className="card-body p-0 pe-4">
                            <h6 className="card-title">{props.name}</h6>
                            <div className="amount ">
                                <OrderAmount
                                    totalAmount={props.totalAmount}
                                    setTotalAmount={props.setTotalAmount}
                                    price={props.price}
                                    name={props.name}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}