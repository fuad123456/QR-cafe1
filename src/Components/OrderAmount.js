import React, {useState} from "react";

export function OrderAmount(props) {
    let [count, setCount] = useState(1);

    function increase() {
        setCount(count + 1)
        console.log(props.name, count)
        let arr = props.totalAmount
        let newobj = arr.find(el => el.name === props.name)
        newobj.price = (count + 1) * props.price
        props.setTotalAmount([...arr])
    };

    function decrease() {
        if (count >= 1) {
            setCount(count - 1);
            let arr = props.totalAmount
            let newobj = arr.find(el => el.name === props.name)
            newobj.price = (count - 1) * props.price
            props.setTotalAmount([...arr])
        } else return;
    };
    return (
        <div className="count">
            <button className="btn-count" onClick={decrease}>-</button>
            <div>{count}</div>
            <button className="btn-count" onClick={increase}>+</button>
            <div className="total">{count * (props.price)}</div>
        </div>
    )

}