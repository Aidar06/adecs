import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {catalog} from "../../../BaceEnd/CatalogJSON";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";
import {AiOutlineClose} from "react-icons/ai";

const DetailHomeAbout = () => {
    const {id} = useParams()
    const obj = catalog[id]
    const [menu,setMenu] = useState(false)
    const [count,setCount] = useState(0)
    const imgArr = [obj.homeImg1,obj.homeImg2,obj.homeImg3]
    const [img,setImg] = useState(imgArr[count])
    useEffect(()=> {
        setImg(imgArr[count])
    },[count])
    return (
        <section id='detailAbout'>
            <div className="detailAboutMenu" style={{display: menu? '' : 'none'}}>
                <div className="detailAboutMenu--close">
                    <AiOutlineClose onClick={()=> setMenu(false)}/>
                </div>
                <div className="detailAboutMenu--block">
                    <img src={img} alt=""/>
                    <div className="detailAboutMenu--block__arrow">
                        <IoIosArrowBack onClick={()=> setCount(count <= 2 && count !== 0? count - 1: 2)}/>
                        <IoIosArrowForward onClick={()=> setCount(count >= 0 && count !== 2? count + 1: 0)}/>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="detailAbout">
                    <img onClick={()=> {setMenu(true); setCount(0)}} src={obj.homeImg1} alt="" className='detailAbout--img'/>
                    <div className="detailAbout--group">
                        <img onClick={()=> {setMenu(true); setCount(1)}} src={obj.homeImg2} alt=""/>
                        <img onClick={()=> {setMenu(true); setCount(2)}} src={obj.homeImg3} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DetailHomeAbout;