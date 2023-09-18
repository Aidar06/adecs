import React, {useState} from 'react';
import {NavLink} from "react-router-dom";

const Burger = ({setBurger,burger}) => {
    const handleNavigation = () => {
        setTimeout(() => {
            scrollToSection();
        }, 100); // Подождите немного перед прокруткой, чтобы дать компоненту Page2 рендериться
    };

    const scrollToSection = () => {
        const sectionElement = document.getElementById('about');
        if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleNavigationAddress = () => {
        setTimeout(() => {
            scrollToSectionAddress();
        }, 200); // Подождите немного перед прокруткой, чтобы дать компоненту Page2 рендериться
    };

    const scrollToSectionAddress = () => {
        const sectionElement = document.getElementById('address');
        if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div style={{ display: burger? '' : 'none'}} className='burger'>
            <div className="burger--menu">
                <NavLink onClick={()=> setBurger(!burger)} to={'/'}>Главное</NavLink>
                <NavLink onClick={()=> {setBurger(!burger); handleNavigation()}} to={'/about'}>О нас</NavLink>
                <NavLink onClick={()=> {setBurger(!burger); handleNavigationAddress()}} to={'/about'}>Адрес</NavLink>
            </div>
        </div>
    );
};

export default Burger;