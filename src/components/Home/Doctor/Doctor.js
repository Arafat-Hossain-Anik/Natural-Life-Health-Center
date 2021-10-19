import React from 'react';

const Doctor = (props) => {
    const { name, img, phone, designation } = props.doctor;
    return (
        <div className="col">
            <div className="card h-100" style={{ width: "300px" }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{designation}</p>
                    <p className="card-text">Phone: {phone}</p>

                </div>
            </div>
        </div >
    );
};

export default Doctor;