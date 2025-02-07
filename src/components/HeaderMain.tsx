import React from "react";
import { BsSearch } from "react-icons/bs";

const HeaderMain = () => {
    return (
        <div className="border-b border-gray-200 py-6">
            <div className="container flex justify-between items-center">
                {/* Hidden Desires Text Design */}
                <div className="relative flex items-center">
                    {/* Pink HD in Background */}
                    <span className="text-pink-400 font-bold opacity-50 text-[7rem] absolute top-1/2 left-[-3rem] transform -translate-x-1/2 -translate-y-1/2 -z-0">
                        HD
                    </span>
                    {/* Main Text */}
                    <h1 className="text-6xl font-serif font-extrabold italic relative z-10 absolute top-[3rem] left-[-1rem] transform -translate-x-1/2 -translate-y-1/2">
                        <span>Hidden </span>
                        <span>Desires</span>
                    </h1>
                </div>

                {/* Search Input */}
                <div className="w-full sm:w-[300px] md:w-[70%] relative"> 
                    <input 
                        className="border-gray-200 border p-2 px-4 rounded-lg w-full"
                        type="text"
                        placeholder="Search for your hidden desires"
                    />
                    <BsSearch className="absolute right-0 top-0 mr-3 mt-3 text-gray-400" />
                </div>
            </div>
        </div>
    );
};

export default HeaderMain;
