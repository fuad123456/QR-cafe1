import React, {useState} from "react";

export const Card = (props) => {
    let [choose, setChoose] = useState(false)

    function choosefood() {
        setChoose(!choose)
        !choose ? localStorage.setItem(props.id, JSON.stringify({name:props.name,price:props.price,url:props.url})):localStorage.removeItem(props.id);
        !choose?props.setTotalItems(props.totalItems+1):props.setTotalItems(props.totalItems-1)
    }
    return (
        <div className="cards pt-4">
            <div className="card-item">
                <div className="card mb-3 bdr pe-2">
                    <div className="row g-2">
                        <div className="col-auto dfx">
                            <div className="image-box"
                                 style={{backgroundImage: `url(${props.url})`, backgroundRepeat: 'no-repeat'}}></div>
                        </div>
                        <div className="col dfx">
                            <div className="card-body p-0 pl-2 ">
                                <h5 className="card-title">{props.name}</h5>
                                <div className="card-desc">In Pizza Mania</div>
                                <div className="card-price">Price {props.price} $</div>
                            </div>
                            <button className="btn-count"
                                    style={{fontSize:'24px'}}
                                    data-value={props.id}
                                    onClick={choosefood}>
                                    {!choose ? <span>+</span> : <span style={{color: 'green',fontSize:'24px'}}>&#10003;</span>}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}