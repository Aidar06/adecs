import React from 'react';
import {useParams} from "react-router-dom";
import {catalog} from "../../../BaceEnd/CatalogJSON";

const DetailHomePlan = () => {
    const {id} = useParams()
    const obj = catalog[id]
    return (
        <section id='detailPlane'>
            <div className="container">
                <div className="detailPlane">
                    <h1>Планировка</h1>
                    <div className='detailPlane--group'>
                        <div className="detailPlane--group__block">
                            <img src={obj.planImg1} alt=""/>
                            <h3>1-этаж</h3>
                        </div>
                        <div className="detailPlane--group__block">
                            <img src={obj.planImg2} alt=""/>
                            <h3>2-этаж</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DetailHomePlan;