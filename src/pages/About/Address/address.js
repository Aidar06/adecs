import React, {useEffect, useRef, useState} from 'react';

const Address = () => {
    const [isVisibleAddress, setIsVisibleAddress] = useState(false);
    const ref = useRef(null);

    const handleScroll = () => {
        const rect = ref.current.getBoundingClientRect();
        if (rect.top + 200 < window.innerHeight){
            setIsVisibleAddress(true)
        }else {
            setIsVisibleAddress(false)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <section id="address">
            <div className="container">
                <div className="address">
                    <h1 ref={ref}><pre>Наш Адрес</pre></h1>
                    <div style={{width: isVisibleAddress? '' : '0px'}} className="address--line"></div>
                    <div style={{width: isVisibleAddress? '' : '0px'}} className="address--lineTwo"></div>
                    <div className="address--block">
                        <div className="address--block__text">
                            <h3><pre>Город Бишкек</pre></h3>
                            <li>Adecs international</li>
                            <li>Киевский 190</li>
                        </div>
                        <iframe className="address--block__map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1461.9483707733648!2d74.58234294084481!3d42.87502355612113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec99b3136cb39%3A0xcc4f85c9937a5227!2zQURFQ1MgSW50ZXJuYXRpb25hbCAo0JDQlNCV0JrQoSDQmNC90YLQtdGA0L3QtdGI0L3Quykg0YHRgtGA0L7QuNGC0LXQu9GM0L3QsNGPINC60L7QvNC_0LDQvdC40Y8!5e0!3m2!1sru!2skg!4v1694779613568!5m2!1sru!2skg"
                                allowFullScreen="" loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Address;