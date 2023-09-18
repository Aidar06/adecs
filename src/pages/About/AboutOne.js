import React from 'react';
import './index.scss';
import About from "./AboutUs/About";
import Trainers from "./Trenerler/trener";
import Address from "./Address/address";
import Contact from "./Contact/contact";

const Index = () => {
    return (
        <div>
            <About/>
            <Trainers/>
            <Address/>
            <Contact/>
        </div>
    );
};

export default Index;