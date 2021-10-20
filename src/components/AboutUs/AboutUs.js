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
                            "Natural Life Health Center" is a leading hospital in Bangledesh. Ours main motto to give people world class service in low cost. Ours have worlds class facility and doctors who are the best around the world. Execpt that we have a dedicated team for support our patient, a blood bank, ambulance service, pharmacy, well decorated room for patient. Also there is a recreational system that will help patient to recover so early and make them emotionaly strong.
                            <br />
                        </p>
                    </div>
                    {/* details image */}
                    <div className='col'>
                        {/* <img className='img-fluid' src="https://imageshack.com/i/pmRmaUpTj" alt="" /> */}
                        <img className='img-fluid' src="https://media.istockphoto.com/photos/portrait-of-middle-aged-asian-female-doctor-standing-in-hospital-picture-id1271328839?k=20&m=1271328839&s=612x612&w=0&h=2cyX-EZL4ynTXCZd0ekoGjd-0FRwJqXAUbhShqkAzE0=" alt="" />
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