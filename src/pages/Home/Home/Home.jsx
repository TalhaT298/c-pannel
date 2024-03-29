import React from 'react';
import FAQ from '../FAQ/FAQ';
import Technology from '../Technology/Technology';
import Offer from '../Offer/Offer';

const Home = () => {
    return (
        <div>
            <p>This is Home</p>
            <Offer></Offer>
            <Technology></Technology>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;