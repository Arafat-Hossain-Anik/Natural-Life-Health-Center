import React from 'react';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
const starIcon = <FontAwesomeIcon icon={faStar} />
const starHalfIcon = <FontAwesomeIcon icon={faStarHalfAlt} />
const Review = (props) => {
    const { name, img, ratings, review } = props.review;
    return (
        <div className="col">
            <div className="card h-100">
                {/* review student image */}
                <div className="mx-auto">
                    <img src={img} className="rounded-circle" alt="StudentImage" style={{ width: "100px" }} />
                </div>
                <div className="card-body">
                    {/* review details */}
                    <h5 className="card-title fw-bold">{name}</h5>
                    <Rating
                        initialRating={ratings}
                        emptySymbol={starHalfIcon}
                        fullSymbol={starIcon} style={{ color: "#ff4545" }}
                        readonly></Rating>
                    <p>{review}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;