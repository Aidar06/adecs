import React, {useEffect, useState} from 'react';
import sip from "../../../assets/img/sip-img.png";
import {IoCloseSharp} from "react-icons/io5";

const HomeSip = () => {

    const [bur,setBur] = useState(false)
    const [display,setDisplay] = useState(false)
    const [block,setBlock] = useState(false)

    useEffect(()=> {
        if(bur){
            setDisplay(true)
            setTimeout(()=>{
                setBlock(true)
            },100)
        }else {
            setBlock(false)
            setTimeout(()=>{
                setDisplay(false)
            },490)
        }
    },[bur])
    return (
        <section id='sip'>
            <div className="sipBurger" style={{display: display? '' : 'none'}}>
                <div className="sipBurger--block" style={{marginTop: block? '' : '-100%'}}>
                    <div className="sipBurger--block__icon">
                        <IoCloseSharp onClick={()=> setBur(false)}/>
                    </div>
                    <div className="sipBurger--block__info">
                        <h1>На сегодняшний день «Adecs International» предлагает прайс на СИП панель
                        </h1>
                        <h3>Цена на СИП панели</h3>
                        <ul>
                            <li><div></div>Длина 2,50 см</li>
                            <li><div></div>Ширина 1,25 см</li>
                            <li><div></div>Толщина 17 см</li>
                            <li><div></div>Цена:</li>
                        </ul>
                        <div>
                            <h4>5 000 сом</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="sip">
                    <div className="sip--image">
                        <img src={sip} alt=""/>
                    </div>
                    <div className="sip--group">
                        <h1>СИП панели</h1>
                        <p>СИП — структурно изоляционная панель.
                            SIP панель (СИП) представляет собой трехслойную конструкцию, состоящую из двух плит OSB-3 (ОСП-3), между которыми под давлением вклеен слой утеплителя. </p>
                        <button onClick={()=> setBur(true)}>цена</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeSip;