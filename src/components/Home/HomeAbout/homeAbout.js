import React, {useEffect, useRef, useState} from 'react';
import {IoClose} from "react-icons/io5";

const HomeAbout = () => {
    return (
        <section id='homeAbout'>
            <div className="container">
                <div className="homeAbout">
                    <div className='homeAbout--group'>
                        <div className="homeAbout--group__block homeAbout1">
                            <h1>7 лет</h1>
                            <h3>успешной работы</h3>
                        </div>
                        <div className="homeAbout--group__info">
                            <h1>№1</h1>
                            <h3>выбор 2022 года</h3>
                        </div>
                    </div>
                    <div className='homeAbout--group'>
                        <div className="homeAbout--group__info">
                            <h1>160к м2</h1>
                            <h3>введено в эксплуатацию</h3>
                        </div>
                        <div className="homeAbout--group__block homeAbout2">
                            <h1>более 3130</h1>
                            <h3>счастливых дольщиков</h3>
                        </div>
                    </div>
                    <div className='homeAbout--group homeAbout3'>
                        <div className="homeAbout--group__big">
                            <h1>17</h1>
                            <h3>крупных объектов</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeAbout;