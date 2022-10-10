import React from "react";
import {OrderAmount} from "./OrderAmount";
import closeCard from '../assets/images/close-card.svg'

export function OrderItem(props) {

    return (
        <div className="card-item ">
            <div className="card mb-3 bdr">
                <button className="btn close-btn"
                        style={{backgroundImage: `url(${closeCard})`, backgroundRepeat: 'no-repeat'}}
                        data-value={props.name}
                        onClick={props.deleteItem}
                >
                </button>
                <div className="row g-2">
                    <div className="col-auto dfx">
                        <div className="image-box"
                             style={{backgroundImage: `url(${props.url})`, backgroundRepeat: 'no-repeat'}}></div>
                    </div>
                    <div className="col dfx">
                        <div className="card-body p-0 pe-4">
                            <h6 className="card-title">{props.name}</h6>

                            <OrderAmount
                                totalAmount={props.totalAmount}
                                setTotalAmount={props.setTotalAmount}
                                price={props.price}
                                name={props.name}
                                obj={props.obj}
                            />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}