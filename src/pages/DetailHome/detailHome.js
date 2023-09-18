import React from 'react';
import DetailHomeAbout from "./DetailHomeAbout/detailHomeAbout";
import DetailHomeHero from "./DetailHomeHero/detailHomeHero";
import DetailHomePlan from "./DetailHomePlan/detailHomePlan";

const DetailHome = () => {
    return (
        <>
            <DetailHomeHero/>
            <DetailHomeAbout/>
            <DetailHomePlan/>
        </>
    );
};

export default DetailHome;