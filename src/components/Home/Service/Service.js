import React from 'react';
import { NavLink } from 'react-router-dom';

const Service = (props) => {
    const { serviceName, img, details, id } = props.service;
    return (
        <div className="col">
            <div className="card h-100" style={{ width: "300px" }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{serviceName}</h5>
                    <p className="card-text">{details}</p>
                </div>
                <div className='m-2'>
                    <NavLink to={`/details/${id}`} className="btn btn-success w-100">See More</NavLink>
                </div>
            </div>
        </div >
    );
};

export default Service;