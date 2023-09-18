import React from 'react';
import pen from "../../../assets/img/pen-img.png";

const HomePen = () => {
    return (
        <section id='pen'>
            <div className="container">
                <div className="pen">
                    <div className="pen--image">
                        <img src={pen} alt=""/>
                    </div>
                    <div className="pen--group">
                        <h1>Пенополистирол</h1>
                        <p>
                            Пенополистирол для SIP-панелей получается методом экструзии. В этом процессе гранулы полистирола плавятся, образуя однородную массу. Затем материал обрабатывается паром и температурой, что приводит к созданию сплошной структуры с воздухом в полностью герметичных ячейках. Пенополистирол состоит на 98% из воздуха и на 2% из экологически безопасного стирола. Стенки ячеек прочные и однородные, что делает материал надежным.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomePen;