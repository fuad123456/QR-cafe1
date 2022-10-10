import React from "react";
import {useSelector} from "react-redux";

export function TotalAmount(props) {
    let data=useSelector(state=>state.orders.choosedFoodsData)
    let total=data.reduce(function (acc,el) {
        return acc+(el.amount*el.price)
    },0)

    return(
        <div className="total-amount fixed-bottom">
            <div className="dfsb">
                <div>Item total</div>
                <div>{total}</div>
            </div>
            <div className="dfsb">
                <div>Discount</div>
                <div>-10%</div>
            </div>
            <div className="dfsb">
                <div>Tax</div>
                <div>$2</div>
            </div>
            <div className="dfsb total">
                <div>Total</div>
                <div>$<span>{total-(total*0.1)+2}</span></div>
            </div>
        </div>
    )
}