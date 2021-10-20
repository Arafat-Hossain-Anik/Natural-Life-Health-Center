import React, { useEffect, useState } from 'react';
import Developer from '../Home/Developer/Developer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsAlt } from '@fortawesome/free-solid-svg-icons';
const arrowIcon = <FontAwesomeIcon icon={faArrowsAlt} />
const AboutUs = () => {
    // fetching developers data from api
    const [developers, setDevelopers] = useState([]);
    useEffect(() => {
        fetch('/developersData.json')
            .then(res => res.json())
            .then(data => setDevelopers(data));
    }, []);
    // selecting 4 data only from large api
    let developersList = [];
    let ct = 0;//counter variable
    for (const developer of developers) {
        developersList.push(developer);
        ct = ct + 1;
        if (ct === 4) {
            break;
        }
    }
    return (
        <div className="container my-5 text-start">
            <h2 className='text-center'>---About Us---</h2>
            <div>
                {/* about online school */}
                <h2>{arrowIcon} Overview</h2>
                <hr />
                <div className=" row row-cols-1 row-cols-md-2 justify-content-between">
                    <div className="col">
                        {/* details */}
                        <p className="fs-5">
                            "My Online School" is an online based educational platform which is stablished 2021 in the time of COVID pandemic to make education easy and available for everyone. Our's main motto is to give world class education to everyone in minimal cost. "My Online School" is a global online learning platform that offers anyone, anywhere, access to online courses and degrees from worlds best teachers.
                            <br />
                        </p>
                    </div>
                    {/* details image */}
                    <div className='col'>
                        <img className='img-fluid' src="https://imageshack.com/i/pmRmaUpTj" alt="" />
                    </div>
                </div>
            </div>
            {/* showing developers data from developer component */}
            <div>
                <h2>{arrowIcon} Developers</h2>
                <hr />
                <div className="row row-cols-1 row-cols-md-4 g-4 my-5">
                    {
                        developersList.map(developer => <Developer
                            key={developer.id}
                            developer={developer}
                        ></Developer>)
                    }
                </div>
            </div>
        </div >
    );
};

export default AboutUs;