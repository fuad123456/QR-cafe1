import React from "react";
import { Fragment } from "react"
import {Link} from "react-router-dom";

const HomePage = () => {
    return (
        <Fragment>
            <div className="section">
                <div className="container">
                    <div className="qr-code text-center ">
                        <img src="assets/images/qr-code.png" alt=""/>
                    </div>
                    <div>
                        <Link to="menu" className="btn btn-prim btn-lg w-100"> Scane QRcode</Link>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default HomePage;