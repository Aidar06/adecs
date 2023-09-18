import React from 'react';
import './trainer.scss';
import alya from './../../../assets/img/aliya.jpeg'
import { useState, useEffect, useRef } from 'react';

const Trainers = () => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    const handleScroll = () => {
        const rect = ref.current.getBoundingClientRect();
        if (rect.top + 200 < window.innerHeight){
            setIsVisible(true)
        }else {
            setIsVisible(false)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const teem = [1,2,3,4,5,6]
    return (
        <section id="trainer">
            <div className="container">
                <div className="trainer">
                    <h1 ref={ref}>Наша Команда</h1>
                    <div style={{width: isVisible? '' : '0px'}} className="trainer--line"></div>
                    <div style={{width: isVisible? '' : '0px'}} className="trainer--line2"></div>

                    <div className='trainer--group'>

                        {
                            teem.map(el => (
                                <div key={el} className="trainer--group__block">
                                    <div className='trainer--group__block--img'>
                                        <img src={alya} alt="img"/>
                                        <div></div>
                                    </div>
                                    <h3><pre>Жумашев Жумаш</pre></h3>
                                    <li>Основатель</li>

                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Trainers;