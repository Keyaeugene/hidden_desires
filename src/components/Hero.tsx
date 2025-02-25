"use client";

import React from "react";
import Slider from "react-slick";
import Slide from "./Slide";

const Hero = () => { 

const settings = { 
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
};

const slideData = [  
    { 
        id: 0,
        img: "/shop i.jpg",
        title: "Discover your Pleasure",
        mainTitle: "LATEST ITEM SALE",
        price: "ksh 600",
    },
     { 
        id: 1,
        img: "/pic2.jpg",
        title: "Discover your Pleasure",
        mainTitle: "LATEST ITEM SALE",
        price: "ksh 600",
    },
];

    return <div> 
        <div className="container pt-6 lg:pt-0"> 
            <Slider {...settings}> 
                {slideData.map((item) =>  
                <Slide 
                   key={item.id}
                   img={item.img}
                   title={item.title}
                   mainTitle={item.mainTitle}
                   price={item.price}
                /> 
            )}
            </Slider>
        </div>
    </div>; 
    
};

export default Hero;