import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { setAmountChoosedFoods, setChoose} from "../features/foodSlice";

export const Card = (props) => {
    const dispatch = useDispatch()
    let choosedFood = useSelector(state => state.foods.choosed)
    let obj={}
    let localData=Object.keys(localStorage)
    for(let i=0; i<localData.length; i++){
        obj[localData[i]]=1
    }
    const chooseFood = function (e) {
        let val = e.target.dataset.value
        if(!obj[props.name]){
            localStorage.setItem(props.name, JSON.stringify({
                price: props.price,
                url: props.url,
            }))

        }else{
            localStorage.removeItem(props.name)
        }
        dispatch(setChoose(val))
        dispatch(setAmountChoosedFoods(choosedFood[props.name]?true:false))
        // dispatch(initLocalHostData(val))
    }

    return (
        <div className="cards pt-2">
            <div className="card-item">
                <div className="card mb-3 bdr pe-2">
                    <div className="row g-2">
                        <div className="col-auto dfx">
                            <div className="image-box"
                                 style={{backgroundImage: `url(${props.url})`, backgroundRepeat: 'no-repeat'}}></div>
                        </div>
                        <div className="col dfx">
                            <div className="card-body p-0 pl-2 ">
                                <h6 className="card-title">{props.name}</h6>
                                <div className="card-desc">In Pizza Mania</div>
                                <div className="card-price">Price {props.price} $</div>
                            </div>
                            <button className="btn-count"
                                    data-value={props.name}
                                    onClick={chooseFood}
                                    style={!obj[props.name]?{color:'#C4C4C4'}:{color:'green'}}>

                                {!obj[props.name] ? '+' : <>&#10003;</>}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}