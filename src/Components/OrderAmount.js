import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {decreaseAmountOfChoosedFood, increaseAmountOfChoosedFood} from "../features/orderSlice";

export function OrderAmount(props) {
    let data = useSelector(state => state.orders.choosedFoodsData)
    const dispatch = useDispatch()
    let a = data.filter(el => el.name === props.name)

    function increase(event) {
        let val = event.target.dataset.value
        dispatch(increaseAmountOfChoosedFood(val))
    };
    function decrease(event) {
        let val = event.target.dataset.value
        dispatch(decreaseAmountOfChoosedFood(val))
    };
    return (
        <div className="amount ">
            <div className="count">
                <button className="btn-count" onClick={decrease} data-value={props.name}>-</button>
                <div>{a[0] ? a[0].amount : 1}</div>
                <button className="btn-count" onClick={increase} data-value={props.name}>+</button>
            </div>
            <div className="total">{a[0] ? a[0].amount * props.price : props.price} $</div>
        </div>
    )

}