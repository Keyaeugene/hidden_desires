"use client";
import React, { useState } from "react";
import ProductCard from "./ProductCard";

const productsData =[ 
   { 
    img: "/anal1.jpg",
    title: "Adults",
    description: "Anal Vibrator Plug Sex Silicone Dildo Stimulate Anus Vaginal G-spot Orgasm",
    rating: 3 ,
    price: "ksh 899",
},
{ 
    img: "/anal2.jpg",
    title: "Adults",
    description: "Anal Vibrator Plug Sex Silicone Dildo Stimulate Anus Vaginal G-spot Orgasm",
    rating: 3 ,
    price: "ksh 990",
},
{ 
    img: "/anal3.jpg",
    title: "Adults",
    description: "Vibrating Anal Beads Butt Plug Anal Vibrator with 10 Vibration Modes",
    rating: 3 ,
    price: "ksh 1,299",
},
{ 
    img: "/bullet1.jpg",
    title: "Women",
    description: "Mini Bullet Vibrator Clitoris Nipples Stimulation Powerful Small Massager",
    rating: 4,
    price: "ksh 1,099",
},
{ 
    img: "/chain 1.jpg",
    title: "Women",
    description: "Adjustable Nipple Labia Clamps Fetish Nipples Teasers Adult Toys Breast Clit Adult Sex Toy For Women",
    rating: 4,
    price: "ksh 1,166",
},
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
    img: "/dildo7.jpg",
    title: "Women",
    description: "7 inch dildo vibrator 10 vibrating modes, has veins to enhance stimulation",
    rating: 4,
    price: "ksh 4,880",
},
{ 
    img: "/dolphine1.jpg",
    title: "Women",
    description: "Dolphin Vibe Cli_t Dildo G-Spot Vibrator Dilido Female Sex Toy (Pink)",
    rating: 4,
    price: "ksh 889",
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
    img: "/ulimi1.jpg",
    title: "Women",
    description: "Realistic Tongue Licking Clitoris VIBRATOR",
    rating: 5,
    price: "ksh 3,399",
},
{ 
    img: "/hand 1.jpg",
    title: "Men",
    description: "Hand held Sex Adults Realistic Oral Clit Vagina For Men Tight pocket Pussy Male Portable Masturbator Cup Deep Throat Tongue Toys with teeth",
    rating: 3,
    price: "ksh 2,399",
},
{ 
    img: "/lip1.jpg",
    title: "Women",
    description: "Discreet Lipstick Vibrator Clit Nipples Stimulator Mini Dildo",
    rating: 2,
    price: "ksh 696",
},
{ 
    img: "/lube1.jpg",
    title: "Women",
    description: "New Fruity Body Lubricant Sex Lube Erotic Lube Edible Massage Body Oil",
    rating: 4,
    price: "ksh 200",
},
{ 
    img: "/lube2.jpg",
    title: "Couples",
    description: "430ml Lubrication for Sex Water-based lubricant Lube Gel Oil Couples",
    rating: 4,
    price: "ksh 1,000",
},
{ 
    img: "/lube3.jpg",
    title: "Couples",
    description: "30ml Water Based Sex Lube Long Lasting Lubricant Edible Massage Body Oil",
    rating: 4,
    price: "ksh 699",
},
{ 
    img: "/lube4.jpg",
    title: "Couples",
    description: "Durex Play Cherry Lube 50ml",
    rating: 4,
    price: "ksh 1,699",
},
{ 
    img: "/oil1.jpg",
    title: "Men",
    description: "Permanent Penis Growth Enlargment Thickening Oil Enlarge for Men",
    rating: 3,
    price: "ksh 699",
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
    img: "/rose3.jpg",
    title: "Women",
    description: "Rose Toy Vibrator Thrusting G Spot Dildo Clitoral Licking Stimulator Anal Plug Oral Tongue",
    rating: 5,
    price: "ksh 2,999",
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
    rating: 3 ,
    price: "ksh 1,599",
},
{ 
    img: "/strap1.jpg",
    title: "Couples",
    description: "Strapon Vibrator Harness Dildo Anal Plug BDSM Strap-on Butt Plug",
    rating: 5,
    price: "ksh 2,596",
},
{ 
    img: "/strap2.jpg",
    title: "Couples",
    description: "Strap on Realistic Dildo Adjustable Harness G Spot Vibrator Vagina Anal",
    rating: 5,
    price: "ksh 1,266",
},
{ 
    img: "/titan1.jpg",
    title: "Men",
    description: "Gold Titan Gel Penis enlargement erectile disfunction and Libido supplement",
    rating: 5,
    price: "ksh 846",
},
{ 
    img: "/titan2.jpg",
    title: "Men",
    description: "50ml Male Penis Enlargement Cream XXL Big Dick Gel Sex Lube Fragrance",
    rating: 5,
    price: "ksh 946",
},
{ 
    img: "/titan3.jpg",
    title: "Men",
    description: "2 in 1 titan Penis Enlargement Gel plus Gold Growth Cream",
    rating: 5,
    price: "ksh 1,049",
},
];

const NewProducts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  // Calculate total pages
  const totalPages = Math.ceil(productsData.length / productsPerPage);

  // Get the products for the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productsData.slice(indexOfFirstProduct, indexOfLastProduct);

  // Handle page navigation
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <div className="container pt-16">
        <h2 className="font-medium text-2xl pb-4">New Products</h2>
        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
          {currentProducts.map((item, index) => (
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

        {/* Pagination Controls */}
        {productsData.length > productsPerPage && (
          <div className="flex justify-center items-center mt-8 gap-4">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded transition-all duration-400 ${
                currentPage === 1
                  ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                  : "bg-gray-200 text-black hover:bg-[#ff8f9c] hover:text-white"
              }`}
            >
              Previous
            </button>
            <span className="text-lg text-black">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded transition-all duration-400 ${
                currentPage === totalPages
                  ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                  : "bg-gray-200 text-black hover:bg-[#ff8f9c] hover:text-white"
              }`}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewProducts;