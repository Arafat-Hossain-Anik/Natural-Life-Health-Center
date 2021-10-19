import React from 'react';
import './Banner.css';
import banner from '../../../images/madecal-team.jpg';

const Banner = () => {
    return (
        <div className='row row-cols-1 row-cols-md-2 mt-5'>
            <div className='col'>
                <h1 className='banner-heading fw-bold'>Natural life <br /> Health Center</h1>
                <h3>Be Healthy, Be Happy</h3>
                <p className='mt-3'>To be fit and healthy take ours world's best specialist counseling and services.</p>
            </div>
            <div className='col'>
                <img className='img-fluid' src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;