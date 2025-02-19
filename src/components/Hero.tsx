"use client";

import React from "react";
import Slider from "react-slick";
import Slide from "./Slide";

const Hero = () => { 

var settings = { 
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
        title: "Trending Items",
        mainTitle: "LATEST ITEM SALE",
        price: "ksh 800",
    },
     { 
        id: 1,
        img: "/pic2.jpg",
        title: "Trending Items",
        mainTitle: "LATEST ITEM SALE",
        price: "ksh 5000",
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