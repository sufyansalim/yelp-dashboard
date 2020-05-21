import React, { useEffect, useRef } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

export default ({photos}) => {
    const carouselRef = useRef(null);
    const options = {
        duration: 300,
        perspective: 1000,
        onCycleTo: () => {
            console.log("New Slide");
        }
    };
    useEffect(() => {
        M.Carousel.init(carouselRef.current, options);
    }, [options]);

    return (
        <div ref={carouselRef} className="carousel">
            {photos.length && photos.map(item => (
                <a className="carousel-item">
                    <img src={item} alt=""/>
                </a>
            ))}
        </div>
    );
}
