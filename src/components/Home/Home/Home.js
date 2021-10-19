import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import Services from '../Services/Services';
import './Home.css';
const Home = () => {
    return (
        <div className='container'>
            <Banner></Banner>
            <Services></Services>
            <Doctors></Doctors>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;