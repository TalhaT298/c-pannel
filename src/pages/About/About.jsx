/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import background from "../../assets/back.png"

const About = () => {
    return (
        <>
        <Link to="about">
        <div>
            <img src={background} alt="" />
        </div>
        </Link>
        </>
        
    );
};

export default About;