import Image from 'next/image';
import React from 'react'

const Testimonial = () => { 
    return ( 
        <div> 
            <div className="container pt-16 pb-16"> 
                <h2 className="font-medium text-2xl pb-4"> Testimonials</h2>
                <div className="grid gap-6 lg:grid-cols-[300px,1fr]"> 
                    <div className="border border-gray-300 rounded-2xl grid place-items-center p-4 lg:p-0 w-full lg:w-[300px]">
                        <div className='text-center flex flex-col items-center gap-1'> 
                            <Image 
                            className='rounded-full'
                            src="/user1.jpg"
                            width={80}
                            height={80}
                            alt="dp"
                            />
                            <h2 className="text-gray font-black text-[20px]"> GILLIAN AMONDI</h2>
                            <p className="text-sm">CEO & FOUNDER INVISION</p>
                            <Image
                            className='inline-block py-2'
                            src="/quotes.svg"
                            width={30}
                            height={30}
                            alt="quotes"
                            />
                            <p className="max-w-[200px] text-gray-500 text-sm"> 
                                Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor sit amet.
                            </p>

                        </div>
                    </div>

                    <div className="bg-red-600 bg-[url(/cta-banner.jpg)] bg-cover h-[500px] rounded-2xl grid place-items-center -ml-px">
                        <div className="bg-[#ffffffab] min-w-[270px] sm:min-w-[300px] md:min-w-[500px] rounded-xl py-8 sm:px-8 px-2 grid place-items-center gap-3">
                            <button className="bg-blackish text-white p-2 rounded-md"> 
                                25% DISCOUNT
                            </button>
                            <h2 className="font-extrabold text-2xl text-[#272727]"> 
                                TOYS COLLECTION
                            </h2>
                            <p className="text-gray-500 text-[20px]"> 
                                Starting @Ksh800 <b>Shop Now</b>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial;