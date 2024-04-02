import React from 'react';
import FAQ from '../FAQ/FAQ';
import Technology from '../Technology/Technology';
import Offer from '../Offer/Offer';
import Reviews from '../Reviews/Reviews';
import Idea from '../Idea/Idea';
import RecentArticle from '../RecentArticle/RecentArticle';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Offer></Offer>
            <Technology></Technology>
            <Idea></Idea>
            <RecentArticle></RecentArticle>
            <Reviews></Reviews>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;