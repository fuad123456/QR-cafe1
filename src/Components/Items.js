import React from "react";


export function Items(props) {
    return (
        <div className="swiper-slide dfc">
            <div href="#" data-value={props.comp[0]} onClick={props.filter}
                 className={props.comp[1] !== 'filter-active' ? 'btn btn-menu-prim btn-sm' : 'btn btn-menu-prim btn-sm filter-active'}>{props.comp[0]}</div>
        </div>
    )
}