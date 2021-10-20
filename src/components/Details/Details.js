import React from 'react';
import { useParams } from 'react-router';
import useServices from '../../hooks/useServices';


const Details = () => {
    const { serviceId } = useParams();
    const allServices = useServices();
    console.log(allServices);
    const detail = allServices.filter(service => service.id === parseInt(serviceId));
    return (
        <div className='container pb-5'>
            <div className='text-center my-5'>
                <h2 className='fw-bold'>{detail[0]?.serviceName}</h2>
            </div>
            <div className="card">
                <div className="row g-0 mx-auto">
                    <div className="col-md-5">
                        <img src={detail[0]?.img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-7">
                        <div className="card-body">
                            <h5 className="card-title">{detail[0]?.serviceName}</h5>
                            <p className="card-text">{detail[0]?.details}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;