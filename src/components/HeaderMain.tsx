"use client";
import React, { useState } from "react";
import { BiUser } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import Image from 'next/image';

const HeaderMain = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Functions to handle actions
  const callNumber = () => {
    window.location.href = "tel:+254705145028";
    setIsPopupOpen(false);
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/+254705145028", "_blank");
    setIsPopupOpen(false);
  };

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  // Function to scroll to a specific section with proper typing
  const scrollToSection = (sectionId: string): void => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="border-b border-gray-200 py-4">
      <div className="container sm:flex justify-between items-center">
        <div className="pb-4 sm:pb-0 text-center">
          <Image
          src="/Hidden Desires.jpg"
           alt="Hidden Desires Logo"
           width={100}
           height={74}
            className="h-[74px] w-auto"
            priority
            />
        </div>
        <div className="hidden lg:block">
          <div className="container">
            <div className="flex w-fit gap-10 mx-auto font-medium py-2 text-blackish">
              <button 
                className="navbar__link relative text-[18px]" 
                onClick={() => scrollToSection('hero')}
              >
                Home
              </button>
              <button 
                className="navbar__link relative text-[18px]" 
                onClick={() => scrollToSection('about-us')}
              >
                About Us
              </button>
              <button 
                className="navbar__link relative text-[18px]" 
                onClick={togglePopup}
              >
                Contacts
              </button>
              <button 
                className="navbar__link relative text-[18px]" 
                onClick={() => scrollToSection('new-products')}
              >
                Products
              </button>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex gap-2 text-gray-500 text-[30px]">
          <BiUser />
          <div className="relative">
            <FiHeart />
            <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[14px] h-[14px] text-[10px] text-white grid place-items-center translate-x-1 -translate-y-1">
              0
            </div>
          </div>
          <div className="relative">
            <HiOutlineShoppingBag />
            <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[14px] h-[14px] text-[10px] text-white grid place-items-center translate-x-1 -translate-y-1">
              0
            </div>
          </div>
        </div>
      </div>

      {/* Pop-up/Modal */}
      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-medium mb-4">Contact Us</h3>
            <button
              onClick={callNumber}
              className="block w-full bg-blue-500 text-white py-2 mb-2 rounded hover:bg-blue-600"
            >
              Call Us
            </button>
            <button
              onClick={openWhatsApp}
              className="block w-full bg-green-500 text-white py-2 mb-2 rounded hover:bg-green-600"
            >
              WhatsApp
            </button>
            <button
              onClick={togglePopup}
              className="block w-full bg-gray-300 text-black py-2 rounded hover:bg-gray-400"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderMain;