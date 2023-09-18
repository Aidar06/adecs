import React, {useState} from 'react';
import {catalog} from "../../../BaceEnd/CatalogJSON";
import {useNavigate} from "react-router-dom";
import {IoIosArrowUp} from "react-icons/io";

const HomeCatalog = () => {
    const navigate = useNavigate();

    const goToDetail = (id) => {
        navigate(`/detail/${id}`);
    };

    const [open,setOpen] = useState(false)
    return (
        <section id='catalog'>
            <div className="container">
                <div className="catalog">
                    {
                        catalog.slice(0, open? 8:4).map(el => (
                            <div key={el.id} className="catalog--block">
                                <div className="catalog--block__area">
                                    <h3>{el.area}</h3>
                                </div>
                                <img src={el.homeImg1} alt="sss" onClick={()=> goToDetail(el.id)}/>
                                <h1>{el.name}</h1>
                                <p>{el.description}</p>
                            </div>
                        ))
                    }
                </div>
                <div className='openIcon'>
                    <IoIosArrowUp style={{
                        transform: open? '' : 'rotate(180deg)',
                        transition: '.5s'
                    }} onClick={()=> setOpen(!open)}/>
                </div>
            </div>
        </section>
    );
};

export default HomeCatalog;