import React from 'react';
import geo from './../../../assets/img/Geo-img.png'

const HomeGeo = () => {
    return (
        <section id='geo'>
            <div className="container">
                <div className="geo">
                    <div className="geo--group">
                        <h1>Геодезические работы</h1>
                        <p>Перед началом любого строительства проводят
                            выбор площадки для будущего строительства
                            объекта. Прежде чем начинать строительство
                            обязательно следует проводить геодезические
                            изыскания. Их перечень довольно широк и
                            содержит горнопроходческие, геофизические
                            буровые и лабораторные работы.</p>
                    </div>
                    <div className="geo--image">
                        <img src={geo} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeGeo;