import React from "react";
import ProductCard from "./ProductCard";

const productsData =[ 
    { 
    img: "/dildo 1.jpg",
    title: "Women",
    description: "Womens Upgraded vibrator Powerful G spot silicone dildo ",
    rating: 4,
    price: "ksh 1,300",
},
{ 
    img: "/dildo 2.jpg",
    title: "Women",
    description: "Womens G-Spot Vibrator USB Rechargeable Wand Discreet Dildo ",
    rating: 4,
    price: "ksh 1,096",
},
{ 
    img: "/dildo 3.jpg",
    title: "Women",
    description: "Flapping Vibrator Dildo G Spot Rabbit Clitoris Vibrator with 7 Sucking modes",
    rating: 4,
    price: "ksh 2,986",
},  
{ 
    img: "/dildo 4.jpg",
    title: "Women",
    description: "Realistic Dildo Rabbit Veined G Spot Vibrator Rechargeable Waterproof",
    rating: 4,
    price: "ksh 1,796",
}, 
{ 
    img: "/lip1.jpg",
    title: "Women",
    description: "Discreet Lipstick Vibrator Clit Nipples Stimulator Mini Dildo",
    rating: 2,
    price: "ksh 696",
},
{ 
    img: "/pump1.jpg",
    title: "Women",
    description: "2 Sizes Pack Pussy Vagina Pump Manual Vacuum Sex Toy Nipples Clit Sucker",
    rating: 4,
    price: "ksh 1,486",
},
{ 
    img: "/rose 1.jpg",
    title: "Women",
    description: "Rose Sucking Vibrator Clit Licking Tongue Powerful Rechargeable ",
    rating: 4,
    price: "ksh 1,866",
},
{ 
    img: "/rose 2.jpg",
    title: "Women",
    description: "Rose Tongue Licking Vibrator Sex Toy Clitoral Sucker Clit Nipples Anal Stimulator",
    rating: 4,
    price: "ksh 1,266",
},
{ 
    img: "/rose 2.jpg",
    title: "Women",
    description: "Rose Tongue Licking Vibrator Sex Toy Clitoral Sucker Clit Nipples Anal Stimulator",
    rating: 4,
    price: "ksh 1,266",
},
{ 
    img: "/chain 1.jpg",
    title: "Women",
    description: "Adjustable Nipple Labia Clamps Fetish Nipples Teasers Adult Toys Breast Clit Adult Sex Toy For Women",
    rating: 4,
    price: "ksh 1,166",
},
{ 
    img: "/dildo 5.jpg",
    title: "Women",
    description: "G-Spot Mermeid Vibrator With Floating Beads Powerful Clit Dildo",
    rating: 4,
    price: "ksh 1,466",
},
{ 
    img: "/dildo6.jpg",
    title: "Women",
    description: "Rechargeable Dildo with clit massage",
    rating: 5,
    price: "ksh 5,387",
},
{ 
    img: "/egg1.jpg",
    title: "Women",
    description: "Clit Licking Tongue Powerful Egg Vibrator USB Rechargeable",
    rating: 4,
    price: "ksh 2,996",
},
{ 
    img: "/finger 1.jpg",
    title: "Women",
    description: "Fingertip Vibrator for Clit Massage & G-Spot Stimulation",
    rating: 4,
    price: "ksh 1,900",
},
{ 
    img: "/hand 1.jpg",
    title: "Men",
    description: "Hand held Sex Adults Realistic Oral Clit Vagina For Men Tight pocket Pussy Male Portable Masturbator Cup Deep Throat Tongue Toys with teeth",
    rating: 3,
    price: "ksh 2,399",
},
{ 
    img: "/wand1.jpg",
    title: "Women",
    description: "Vibrator Wand,Adult Sex Toy Wand, G Spot Dildo, Clit Vibrator,",
    rating: 2,
    price: "ksh 1,299",
},
{ 
    img: "/wand2.jpg",
    title: "Women",
    description: "USB Rechargeable G-spot Clit Vibrator Dildo Massager Magic Wand Waterproof",
    rating: 2,
    price: "ksh 1,599",
},
];

const NewProducts = () => { 
    return ( 
<div>  
    <div className="container pt-16"> 
        <h2 className="font-medium text-2xl pb-4"> 
         New Products   
        </h2>
        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2
        lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x 20 xl:gap-y-10">  
        {productsData.map((item, index) =>  ( 
            <ProductCard
            key={index}
            img={item.img}
            title={item.title}
            description={item.description}
            rating={item.rating}
            price={item.price}
            />
        ))}
        </div>
    </div>
</div>
    );
};

export default NewProducts; 