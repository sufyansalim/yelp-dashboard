import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const BusinessItem = ({
                          business: {image_url, name, rating, review_count, id}
                      }) => {
    const review = Math.round(rating);

    return (
        <div className="col s12 m6 l4">
            <div className="card">
                <div className="card-image">
                    <img alt="" src={image_url} width="120" height="220"/>
                </div>
                <div className="card-content">
                    <strong>{name}</strong>
                    <p style={{fontWeight: 500, fontSize: '.8rem', color: 'gray'}}>Reviews ({review_count})</p>

                </div>
                <div className="card-action">
                    <div className="row">
                        <div className="col m9">
                            {[...Array(review).keys()].map(item => {
                                return <i className="material-icons star-icon">star</i>;
                            })}
                        </div>
                        <div className="col m3">
                            <Link
                                to={`/${id}`}
                                style={{margin: 0}}
                                className="right waves-effect waves-light btn-small more-btn"
                            >
                                More
                            </Link>
                        </div>
                    </div>
                    <span>


                    </span>

                </div>
            </div>
        </div>
    );
};

BusinessItem.propTypes = {
    business: PropTypes.object.isRequired
};

export default BusinessItem;
