import React from 'react';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';
import './Home.css';
const Home = () => {
    return (
        <div className='container'>
            <Banner></Banner>
            <Services></Services>
            <Doctors></Doctors>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;