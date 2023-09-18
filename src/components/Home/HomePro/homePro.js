import React from 'react';

import {HiCalendarDays} from "react-icons/hi2";
import {MdOutlineWeekend} from "react-icons/md";
import {BsPersonWorkspace} from "react-icons/bs";

const HomePro = () => {
    return (
        <section id='homePro'>
            <div className="container">
                <div className="homePro">
                    <h1>График роботы</h1>
                    <div className="homePro--group">
                        <div className="homePro--group__block">
                            <div className="homePro--group__block--icon">
                                <HiCalendarDays/>
                            </div>

                            <div className="homePro--group__block--info">
                                <h2><pre>6 дней</pre></h2>
                                <div></div>
                                <h4><pre>в неделю</pre></h4>
                            </div>
                        </div>
                        <div className="homePro--group__block">
                            <div className="homePro--group__block--icon">
                                <BsPersonWorkspace/>
                            </div>

                            <div className="homePro--group__block--info">
                                <h2><pre>Пн-Cу</pre></h2>
                                <div></div>
                                <h4><pre>10:00-18:00</pre></h4>
                            </div>
                        </div>
                        <div className="homePro--group__block">
                            <div className="homePro--group__block--icon">
                                <MdOutlineWeekend/>
                            </div>

                            <div className="homePro--group__block--info">
                                <h2><pre>Вс</pre></h2>
                                <div></div>
                                <h4><pre>нерабочий день</pre></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomePro;