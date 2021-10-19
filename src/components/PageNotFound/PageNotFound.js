import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/404-not-found.jpg';

const PageNotFound = () => {

    return (
        // when user give an invalid link 
        <div className='text-center' style={{ height: "74vh" }}>
            <div className="my-5">
                <img src={img} alt="" />
            </div>
            <Link to="/home">
                <button className="btn btn-warning my-2">Go Back To Home</button>
            </Link>
        </div>
    );
};

export default PageNotFound;