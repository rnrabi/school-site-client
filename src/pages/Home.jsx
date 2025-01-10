import React from 'react';
import Navbar from '../component/Navbar';
import Slider from '../component/Slider';
import AboutSchool from '../component/AboutSchool';
import OurClasses from '../component/OurClasses';
import TotalStudents from '../component/TotalStudents';
import WhyChoose from '../component/WhyChoose';
import MeetTeacher from '../component/MeetTeacher';
import Gallary from '../component/Gallary';
import ParentSay from '../component/ParentSay';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Slider></Slider>
            <AboutSchool></AboutSchool>
            <OurClasses></OurClasses>
            <TotalStudents></TotalStudents>
            <WhyChoose></WhyChoose>
            <MeetTeacher></MeetTeacher>
            <Gallary></Gallary>
            <ParentSay></ParentSay>
        </div>
    );
};

export default Home;