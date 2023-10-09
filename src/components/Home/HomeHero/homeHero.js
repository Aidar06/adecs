import React, {useEffect, useState} from 'react';
import {BsFillTelephoneFill, BsInstagram, BsWhatsapp} from "react-icons/bs";
import {FaTiktok, FaYoutube} from "react-icons/fa";
import video from './../../../assets/img/bg_hero_video.MOV'



const HomeHero = () => {
    const [span,setSpan] = useState('')
    const [text,setText] = useState('ВМЕСТЕ')
    let n = ''
    let m = 0

    useEffect(()=> {
        let j = setInterval(()=> {
            if(m < text.length){
                n += text[m]
                setSpan(n)
                m += 1
            }else {
                clearInterval(j)
            }
        }, 100)

        setTimeout(()=> {
            let remove = setInterval(()=> {
                if(m > -1){
                    n = n.slice(0, m)
                    setSpan(n)
                    m -= 1
                }else {
                    clearInterval(remove)
                }
            }, 100)
            setTimeout(()=> {
                setText(text === 'ВМЕСТЕ' ? 'ЛУЧШЕ' : text === 'КАЧЕСТВЕННО'? 'ВМЕСТЕ' : 'КАЧЕСТВЕННО')
            }, 100 * text.length + 100)
        }, 3000)

        return () => clearInterval(j)
    },[text])



    return (
        <section id='homeHero'>
                <div className='homeHero'>
                    <div className='homeHero--con'>
                        <a href="https://instagram.com/adecs_international?igshid=MzRlODBiNWFlZA==" target="_blank" className='homeHero--con__a'><BsInstagram/></a>
                        <a href="https://youtube.com/@adecsinternational9410?si=-b2jTY-id9hgJSQk" target="_blank" className='homeHero--con__a1'><FaYoutube/></a>
                        <a href="https://www.tiktok.com/@adecs_international?_t=8fW86b9Ucau&_r=1" target="_blank" className='homeHero--con__a2'><FaTiktok/></a>
                        <a href="https://api.whatsapp.com/send/?phone=996708816996&text&type=phone_number&app_absent=0" target="_blank" className='homeHero--con__a3'><BsWhatsapp/></a>
                        <a href="tel:+996708816996" target="_blank" className='homeHero--con__a4'><BsFillTelephoneFill/></a>
                    </div>
                    <div className='homeHero--block'></div>
                    <div className="homeHero--info">
                       <h1>МЫ СТРОИМ <br/><span>{span}</span></h1>
                    </div>
                </div>
        </section>
    );
};

export default HomeHero;