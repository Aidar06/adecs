import React, {useEffect, useRef, useState} from 'react';
import {BsFillTelephoneFill, BsInstagram, BsTiktok, BsTwitter, BsWhatsapp, BsYoutube} from "react-icons/bs";
import {FaFacebookF} from "react-icons/fa";
import {SiGmail} from "react-icons/si";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";

const Contact = () => {

    const [deg,setDeg] = useState(0)

    return (
        <section id='contact'>
            <div className="contact-rel">
                <div className='contact-rel--shadow'>

                </div>
                <div className='contact-rel-block'>
                    <div className='contact-adjust'>
                        <IoIosArrowBack onClick={()=> setDeg(deg=> deg-45)}/>
                        <IoIosArrowForward onClick={()=> setDeg(deg=> deg+45)}/>
                    </div>
                    <div style={{transform: `rotate(${deg}deg)`}} className="contact">

                        <div className="contact--block one">
                            <div
                                style={{background: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)'}}
                                className="contact--block__link">
                                <BsInstagram/>
                            </div>
                            <a href="https://instagram.com/adecs_international?igshid=MzRlODBiNWFlZA==" target="_blank">Instagram</a>
                        </div>

                        <div className="contact--block two">
                            <div style={{background: 'linear-gradient(120deg, #0088cc, #FFFFFF)'}}
                                 className="contact--block__link">
                                <BsTiktok/>
                            </div>
                            <a href="https://www.tiktok.com/@adecs_international?_t=8fW86b9Ucau&_r=1" target="_blank">Tik-Tok</a>
                        </div>

                        <div className="contact--block three">
                            <div style={{background: '#FF0000'}} className="contact--block__link">
                                <BsYoutube/>
                            </div>
                            <a href="https://youtube.com/@adecsinternational9410?si=-b2jTY-id9hgJSQk" target="_blank">Youtube</a>
                        </div>

                        <div className="contact--block fore">
                            <div
                                style={{background: 'linear-gradient(45deg, rgba(63,62,78,0.9164915966386554) 10%, rgba(94,21,110,1) 54%, rgba(14,108,128,1) 100%)'}}
                                className="contact--block__link">
                                <BsFillTelephoneFill/>
                            </div>
                            <a href="tel:+996708816996">0708816996</a>
                        </div>

                        <div className="contact--block five">
                            <div style={{background: 'linear-gradient(45deg, #E5FFCC, #1EBEA5, #00E676, #D0E9EA)'}}
                                 className="contact--block__link">
                                <BsWhatsapp/>
                            </div>
                            <a href="https://api.whatsapp.com/send/?phone=996708816996&text&type=phone_number&app_absent=0" target="_blank">Whatsapp</a>
                        </div>

                        <div className="contact--block six">
                            <div style={{background: 'linear-gradient(120deg, #3b5998, #FFFFFF)'}}
                                 className="contact--block__link">
                                <FaFacebookF/>
                            </div>
                            <a href="https://www.facebook.com/ADECSinternational?mibextid=LQQJ4d" target="_blank">Facebook</a>
                        </div>

                        <div className="contact--block seven">
                            <div
                                style={{background: 'linear-gradient(45deg, #66757f, #00ACEE, #36D8FF, #f5f8fa, #ffffff)'}}
                                className="contact--block__link">
                                <BsTwitter/>
                            </div>
                            <a href="#" target="_blank">Twitter</a>
                        </div>

                        <div className="contact--block eight">
                            <div style={{background: 'linear-gradient(-120deg, #4285f4, #34a853, #fbbc05, #ea4335)'}}
                                 className="contact--block__link">
                                <SiGmail/>
                            </div>
                            <a href="#" target="_blank">Gmail</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;