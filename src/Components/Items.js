import React from "react";
import {useSelector} from "react-redux";


export function Items(props) {
    let classCategory=useSelector((state)=>state.foods.classCategories)
    return (
        <div className="swiper-slide dfc">
            <div href="#" data-value={props.comp} onClick={props.filter}
                 className={classCategory[props.comp] ? 'btn btn-menu-prim btn-sm filter-active' : 'btn btn-menu-prim btn-sm '}>{props.comp}</div>
        </div>
    )
}