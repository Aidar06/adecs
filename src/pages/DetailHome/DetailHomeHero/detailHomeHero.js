import React from 'react';
import {catalog} from "../../../BaceEnd/CatalogJSON";
import {useParams} from "react-router-dom";

const DetailHomeHero = () => {
    const {id} = useParams()
    const homeObj = catalog[id]
    return (
        <section id='detailHero'>
            <div className="container">
                <div className="detailHero">
                    <h1>{homeObj.name}</h1>
                    <p>Мы не просто строим, мы привносим инновации!</p>
                </div>
            </div>
        </section>
    );
};

export default DetailHomeHero;