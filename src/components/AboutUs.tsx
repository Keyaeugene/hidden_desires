"use client";

import React, { useState } from "react";

const AboutUs = () => {
    const [activeTab, setActiveTab] = useState("mission");

    const stats = [
        { number: "100+", label: "Products Available" },
        { number: "95%", label: "Customer Satisfaction" },
        { number: "24/7", label: "Support" },
        { number: "5k+", label: "Happy Customers" },
    ];

    const values = [
        {
            icon: "🎯",
            title: "Excellence",
            description: "We deliver premium products and services to fulfill your hidden desires with unparalleled quality."
        },
        {
            icon: "⚡",
            title: "Speed",
            description: "Fast and reliable service to meet your needs without delay."
        },
        {
            icon: "🔒",
            title: "Privacy",
            description: "Your personal desires and information are kept confidential and secure."
        },
        {
            icon: "💡",
            title: "Innovation",
            description: "Using creative and innovative approaches to enhance your experience."
        }
    ];

    // Function to scroll to new products section
    const scrollToNewProducts = () => {
        const section = document.getElementById('new-products');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id="about-us">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        About Hidden Desires
                        <div className="w-20 h-1 bg-[#ff8f9c] mx-auto mt-4 rounded-full"></div> {/* Changed to #ff8f9c */}
                    </h2>
                    <p className="text-lg text-gray-600">
                        Discover the story behind Hidden Desires, your premier destination for unique and fulfilling experiences since 2020.
                    </p>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
                    {stats.map((stat, index) => (
                        <div 
                            key={index}
                            className="relative group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-[#ff8f9c] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" /> {/* Changed gradient to use #ff8f9c */}
                            <div className="relative">
                                <div className="text-3xl font-bold text-[#ff8f9c] mb-2">{stat.number}</div> {/* Changed text color to #ff8f9c */}
                                <div className="text-gray-600">{stat.label}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Tabs Section */}
                <div className="bg-white rounded-2xl shadow-lg p-8 mb-20">
                    {/* Tab Headers */}
                    <div className="flex flex-wrap gap-4 mb-8 border-b border-gray-200">
                        {["mission", "vision", "values"].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-3 text-lg font-semibold transition-all duration-300 border-b-2 ${
                                    activeTab === tab 
                                        ? "text-[#ff8f9c] border-[#ff8f9c]" // Changed to #ff8f9c for active state
                                        : "text-gray-500 border-transparent hover:text-[#ff8f9c]" // Changed hover color to #ff8f9c
                                }`}
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="space-y-6">
                        {activeTab === "mission" && (
                            <div className="animate-fade-in">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    At Hidden Desires, our mission is to help you explore and fulfill your deepest desires through premium products and personalized experiences, ensuring satisfaction and discretion.                        </p>
                            </div>
                        )}

                        {activeTab === "vision" && (
                            <div className="animate-fade-in">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    To become the worlds leading destination for unique, high-quality products and services that unlock and celebrate individual desires with innovation and trust.
                                </p>
                            </div>
                        )}

                        {activeTab === "values" && (
                            <div className="animate-fade-in">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {values.map((value, index) => (
                                        <div key={index} className="flex items-start space-x-4">
                                            <span className="text-3xl">{value.icon}</span>
                                            <div>
                                                <h4 className="text-lg font-semibold text-gray-900 mb-1">
                                                    {value.title}
                                                </h4>
                                                <p className="text-gray-600">{value.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center bg-gradient-to-r from-gray-50 to-[#ff8f9c] rounded-2xl p-8"> {/* Changed gradient to use #ff8f9c */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Ready to Explore Your Hidden Desires?
                    </h3>
                    <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                        Join thousands of customers who have discovered their unique passions with our expert guidance and exceptional products.
                    </p>
                    <button
                        onClick={scrollToNewProducts}
                        className="inline-flex items-center px-8 py-4 text-lg font-semibold rounded-xl 
                            bg-[#ff8f9c] text-white hover:bg-[#e87e8e] transition-all duration-300 transform hover:scale-105" // Changed background to #ff8f9c and hover to a darker shade
                    >
                        Shop Now
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;