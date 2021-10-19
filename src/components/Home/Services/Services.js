import React from 'react';
import useServices from '../../../hooks/useServices';
import Service from '../Service/Service';

const Services = () => {
    const services = useServices();
    return (
        <div id='services' className='mt-5 mb-5'>
            <div className='text-center mb-5'>
                <h2 className='fw-bold'>---Services---</h2>
            </div>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {
                    services.map(service => <Service
                        service={service}
                        key={service.id}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;