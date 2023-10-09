import React from 'react';
import './trainer.scss';
import urmat from './../../../assets/team/urmat.JPG'
import edil from './../../../assets/team/edil.JPG'
import ularbek from './../../../assets/team/ulatbek.jpg'
import medina from './../../../assets/team/medina.JPG'
import user from './../../../assets/team/user.png'
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

    const teem = [
        {
            id: 0,
            name:'Бакырдинов Уларбек',
            status: 'генеральный директор',
            img: ularbek,
        },
        {
            id: 1,
            name:'Канаев Нуржигит',
            status: 'Технический директор',
            img: user,
        },
        {
            id: 2,
            name:'Жекшенов Эдиль',
            status: 'прораб-менеджер',
            img: edil,
        },
        {
            id: 3,
            name:'Бакытбек уулу Эмилбек',
            status: 'главный архитектор',
            img: user,
        },
        {
            id: 4,
            name:'Бейшенбекова Медина',
            status: 'менеджер',
            img: medina,
        },
        {
            id: 5,
            name:'Таалайбеков Урмат',
            status: 'сметчик',
            img: urmat,
        },
    ]
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
                                <div key={el.id} className="trainer--group__block">
                                    <div className='trainer--group__block--img'>
                                        <img src={el.img} alt="img"/>
                                        <div></div>
                                    </div>
                                    <h3><pre>{el.name}</pre></h3>
                                    <li>{el.status}</li>

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