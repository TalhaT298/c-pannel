import React from 'react';
import FAQ from '../FAQ/FAQ';
import Technology from '../Technology/Technology';
import Offer from '../Offer/Offer';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <p>This is Home</p>
            <Offer></Offer>
            <Technology></Technology>
            <Reviews></Reviews>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;