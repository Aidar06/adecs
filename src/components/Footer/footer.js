import React from 'react';
import './footerStyle.scss'

const Footer = () => {
    return (
        <footer id='footer'>
            <div className="footer">
                <h1 className='footer--text'>If you do not
                    <br/><span className='footer--text__span'>have your goal,</span>
                    <br/><span className='footer--text__span1'>then you will work</span>
                    <br/><span className='footer--text__span2'>for someone in whose</span>
                    <br/><span className='footer--text__span3'>life it is.</span></h1>
                <h2>Robert Anthony.</h2>
                <div className='footer--bg'></div>
            </div>
        </footer>
    );
};

export default Footer;