import React from 'react';
import {useParams} from "react-router-dom";
import {catalog} from "../../../BaceEnd/CatalogJSON";

const DetailHomeAbout = () => {
    const {id} = useParams()
    const obj = catalog[id]
    return (
        <section id='detailAbout'>
            <div className="container">
                <div className="detailAbout">
                    <img src={obj.homeImg1} alt="" className='detailAbout--img'/>
                    <div className="detailAbout--group">
                        <img src={obj.homeImg2} alt=""/>
                        <img src={obj.homeImg3} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DetailHomeAbout;