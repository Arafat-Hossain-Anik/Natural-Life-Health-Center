import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('./doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, []);
    return (
        <div id='doctors' className='mt-5 mb-5'>
            <div className='text-center mb-5'>
                <h2 className='fw-bold'>---Meet Our Specialist Doctors---</h2>
            </div>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {
                    doctors.map(doctor => <Doctor
                        key={doctor.id}
                        doctor={doctor}
                    ></Doctor>)
                }
            </div>
            <div className='text-center mt-5'>
                <NavLink to="/doctorslist" className="btn btn-success">View All Doctors</NavLink>
            </div>
        </div>
    );
};

export default Doctors;