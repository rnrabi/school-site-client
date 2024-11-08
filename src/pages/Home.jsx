import React from 'react';
import Navbar from '../component/Navbar';
import Slider from '../component/Slider';
import AboutSchool from '../component/AboutSchool';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Slider></Slider>
            <AboutSchool></AboutSchool>
        </div>
    );
};

export default Home;