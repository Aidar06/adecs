import React, {useState} from 'react';
import {IoIosArrowUp} from "react-icons/io";
import {AiOutlineReload} from "react-icons/ai";

const HomeLessons = () => {

    const videos = [
        {
            id: 1,
            video: <iframe width="560" height="315" src="https://www.youtube.com/embed/vXe1OuRWgM8?si=V0GhiVyEMHZy7feJ"
                           title="YouTube video player" frameBorder="0"
                           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                           allowFullScreen></iframe>
        },
        {
            id: 2,
            video: <iframe width="560" height="315" src="https://www.youtube.com/embed/SROnrG1MUVA?si=RkXSRD0iYKnII4Kk"
                           title="YouTube video player" frameBorder="0"
                           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                           allowFullScreen></iframe>
        },
        {
            id: 3,
            video: <iframe width="560" height="315" src="https://www.youtube.com/embed/hbW3C6S-E08?si=5oDIuERwKSVsjRW4"
                           title="YouTube video player" frameBorder="0"
                           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                           allowFullScreen></iframe>
        },
        {
            id: 4,
            video: <iframe width="560" height="315" src="https://www.youtube.com/embed/R9zQ_ZhCKFQ?si=H1tlrXwME4sRwLRH"
                           title="YouTube video player" frameBorder="0"
                           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                           allowFullScreen></iframe>
        },
    ]

    const [arrow,setArrow] = useState(false)

    return (
        <section id='homeLessons'>
            <div className="container">
                <div className="homeLessons">
                    <h1><pre>Наши видео</pre></h1>
                    <div className='homeLessons--group'>
                        {
                            videos.slice(0, arrow? videos.length : 2).map(el => (
                                <div className='homeLessons--group__video'>
                                    {el.video}
                                    <div className='homeLessons--group__video--load'>
                                        <AiOutlineReload/>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="homeLessons--arrow">
                        <IoIosArrowUp style={{
                            transform: arrow? '' : 'rotate(180deg)',
                            transition: '.5s'
                        }} onClick={()=> setArrow(!arrow)}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeLessons;