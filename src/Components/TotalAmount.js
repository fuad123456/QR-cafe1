import React from "react";

export function TotalAmount(props) {
    let v=0
    function sum() {
        let c =0
        for (let key in props.totalAmount){
            c+=props.totalAmount[key].price
            if (props.totalAmount[key].price){
                v++
            }
        }
        return c
    }
    return(
        <div className="total-amount fixed-bottom">
            <div className="dfsb">
                <div>Item total</div>
                <div>${sum()}</div>
            </div>
            <div className="dfsb">
                <div>Discount</div>
                <div>-$10</div>
            </div>
            <div className="dfsb">
                <div>Tax</div>
                <div>$2</div>
            </div>
            <div className="dfsb total">
                <div>Total</div>
                <div>$<span>{sum()-(0.1*sum())+(v?2:0)}</span></div>
                {/*<div>$<span>{props.totalAmount}</span></div>*/}
            </div>
        </div>
    )
}