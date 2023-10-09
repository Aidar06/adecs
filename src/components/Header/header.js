import React from 'react';
import {NavLink} from "react-router-dom";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";
import logo from './../../assets/img/logo_adecs.PNG'
import {BsFillTelephoneFill} from "react-icons/bs";


const Header = ({setBurger,burger}) => {
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

    const coll = () => {
        window.location.href = `tel:+996708816996`;
    };
    return (
        <header id='header'>
            <div className="container">
                <div className="header">
                    <nav className='header--nav'>
                        <div className='header--nav__logo'>
                            <div>
                                <img src={logo} alt=""/>
                            </div>

                        </div>
                        <div className='header--nav__navbar'>
                            <NavLink to='/'><pre>Главное</pre></NavLink>
                            <NavLink onClick={()=> handleNavigation()} to='/about'><pre>О нас</pre></NavLink>
                            <NavLink onClick={()=> handleNavigationAddress()} to='/about'><pre>Адрес</pre></NavLink>
                        </div>
                    </nav>
                    <div className='header--btn'>
                        <button onClick={()=> coll()}><BsFillTelephoneFill/></button>
                        <div className='header--btn__menu'>
                            <div style={{transform: burger? 'rotate(360deg)': ''}} onClick={()=> setBurger(!burger)} className='header--btn__menu--icon'>
                                <AiOutlineClose style={{display: burger? '':'none'}}/>
                                <div style={{height: burger? '10px' : ''}}><AiOutlineMenu style={{display: burger? 'none':''}}/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;