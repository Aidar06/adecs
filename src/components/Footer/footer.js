import React from 'react';
import './footerStyle.scss'

const Footer = () => {
    return (
        <footer id='footer'>
            <div className="container">
                <div className="footer">
                    <div className="footer--block text">
                        <h1>Adecs international</h1>
                        <h2>Уютные Канадские домики</h2>
                    </div>
                    <div className="footer--block">
                        <a href="https://instagram.com/adecs_international?igshid=MzRlODBiNWFlZA==">instagram</a>
                        <a href="https://youtube.com/@adecsinternational9410?si=-b2jTY-id9hgJSQk">you tube</a>
                        <a href="https://www.facebook.com/ADECSinternational?mibextid=LQQJ4d">facebook</a>
                    </div>
                    <div className="footer--block link">
                        <a href="tel:+996 708 816 996">+996 708 816 996</a>
                        <a href="tel:+996 500 816 996">+996 500 816 996</a>
                        <a href="tel:+996 705 816 996">+996 705 816 996</a>
                        <a href="tel:+996 554 543 636">+996 554 543 636</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;