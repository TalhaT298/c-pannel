/* eslint-disable no-unused-vars */
import React from 'react';
import FAQ from '../FAQ/FAQ';
import Technology from '../Technology/Technology';
import Offer from '../Offer/Offer';
import Reviews from '../Reviews/Reviews';
import Idea from '../Idea/Idea';
import RecentArticle from '../RecentArticle/RecentArticle';
import Banner from '../Banner/Banner';
// import ThreeD from '../ThreeD/ThreeD';
import Members from '../Members/Members';
import Text from '../Text/Text';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Offer></Offer>
            <Technology></Technology>
            <Idea></Idea>
            <RecentArticle></RecentArticle>
            <Reviews></Reviews>
            <Members></Members>
            <FAQ></FAQ>
            <Text></Text>
            {/* <ThreeD></ThreeD> */}
        </div>
    );
};

export default Home;