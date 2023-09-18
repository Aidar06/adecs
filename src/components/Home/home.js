import React from 'react';
import HomeHero from "./HomeHero/homeHero";
import HomeAbout from "./HomeAbout/homeAbout";
import HomePro from "./HomePro/homePro";
import HomeLessons from "./HomeLessons/homeLessons";
import HomeGeo from "./HomeGeo/homeGeo";
import HomeSip from "./HomeSip/homeSip";
import HomeOsb from "./HomeOsb/homeOsb";
import HomePen from "./HomePen/homePen";
import HomeCatalog from "./HomeCatalog/homeCatalog";


const Home = () => {
    return (
        <>
            <HomeHero/>
            <HomeAbout/>
            <HomeCatalog/>
            <HomeGeo/>
            <HomeSip/>
            <HomeOsb/>
            <HomePen/>
            <HomePro/>
            <HomeLessons/>
        </>
    );
};

export default Home;