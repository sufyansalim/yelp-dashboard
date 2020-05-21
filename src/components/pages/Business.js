import React, {useEffect, useContext, useState, useRef} from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import BusinessContext from "../../context/business/businessContext";
import Carousel from "../common/Carousel";
import PropTypes from "prop-types";

const Business = ({match}) => {
    const businessContext = useContext(BusinessContext);
    const {
        loading,
        business,
        reviews,
        getBusiness,
        getReviews
    } = businessContext;
    const [load, setLoad] = useState(loading);
    const carouselEl = useRef(null);


    const getData = () => {
        getBusiness(match.params.id);
        getReviews(match.params.id);
    };

    useEffect(() => {
        getData();
        initCarousel();
    }, []);

    const initCarousel = () => M.Carousel.init(carouselEl.current, {
        duration: 300,
        onCycleTo: () => {
            console.log("New Slide");
        }
    });

    console.log(business);
    if (load) {
        return <div>Loading....</div>;
    }

    return (
        business &&
        <>
            <div className="row">
                <div className="col l10">
                    <Carousel photos={business.photos}/>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col l12">
                        <strong style={{fontSize: "25px"}}>{business.name}</strong>
                        <div className="ratingDiv">
                            {[...Array(Math.round(business.rating)).keys()].map(item => {
                                return <i className="material-icons star-icon">star</i>;
                            })}
                            <p className="ratingTxt">{business.review_count} Reviews</p>
                        </div>
                        <p style={{fontWeight: "bold", fontSize: "15px"}}>
                            Phone:
                            <span style={{fontWeight: "normal", color: "#2980b9"}}>
                                {business.phone}
                            </span>
                        </p>
                        <p style={{fontWeight: "bold", fontSize: "15px"}}>Address:</p>
                        <strong>{business.location.address1}, </strong>
                        <strong>{business.location.city}, </strong>
                        <strong>{business.location.state}, </strong>
                        <strong>{business.location.country},</strong>
                    </div>
                </div>
                {reviews.map(review => (
                    <div className="col s12 m8 offset-m2 l6 offset-l3">
                        <div className="card-panel grey lighten-5 z-depth-1">
                            <div className="row valign-wrapper">
                                <div className="col s1 l1">
                                    <img
                                        src={review.user.image_url}
                                        alt=""
                                        className="reviewImg circle"
                                    />
                                </div>
                                <div className="col s10 l10">
                                    <p className="black-text" style={{fontWeight: "bold"}}>
                                        {review.user.name}
                                    </p>
                                    {[...Array(Math.round(review.rating)).keys()].map(item => {
                                        return <i className="material-icons star-icon">star</i>;
                                    })}
                                    <p className="black-text">{review.text}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>

    );
};

Business.propTypes = {
    match: PropTypes.object.isRequired
};

export default Business;
