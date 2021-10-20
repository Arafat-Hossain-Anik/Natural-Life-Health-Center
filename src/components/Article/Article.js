import React from 'react';

const Blog = (props) => {
    // destructuring for getting blog data
    const { topics, img, category, writer, details } = props.blog;
    return (
        <div className="card mb-3" style={{ maxWidth: "100%" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    {/* blog image */}
                    <img src={img} className="w-100 h-100 rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body text-start">
                        {/* blog details */}
                        <h5 className="card-title">{topics}</h5>
                        <p className="card-text fw-bold"><small className="text-muted">By: {writer} Category: {category}</small></p>
                        <p className="card-text">{details}</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Blog;