import React from 'react';
import osb from "../../../assets/img/osb-img.png";

const HomeOsb = () => {
    return (
        <section id='osb'>
            <div className="container">
                <div className="osb">
                    <div className="osb--group">
                        <h1>Плита OSB-3</h1>
                        <p>
                            Многослойная плита древесного происхождения, состоящая на 95% из древесины, специально разработана для использования в строительной индустрии. Плиты OSB-3 соответствуют высшему европейскому классу экологической безопасности Е1. Благодаря связующей и специальной обработке поверхности, они обладают водостойкостью, устойчивостью к гниению, плесени и атмосферным воздействиям, что существенно превосходит характеристики обычной древесины.</p>
                    </div>
                    <div className="osb--image">
                        <img src={osb} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeOsb;