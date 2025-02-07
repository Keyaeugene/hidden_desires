import React from 'react';
import { FaSquareFacebook, FaSquareInstagram, FaSquareWhatsapp, FaSquareXTwitter } from "react-icons/fa6";

const HeaderTop = () => { 
    return <div className="border-b border-gray-200 hidden sm:block"> 
    <div className="container py-4">
        <div className='flex justify-between items-center'> 
<div className='hidden lg:flex gap-1'>
    <div className="header_top_icon_wrapper"> 
        <FaSquareFacebook />
    </div>
    <div className="header_top_icon_wrapper"> 
        <FaSquareXTwitter />
    </div>
    <div className="header_top_icon_wrapper"> 
        <FaSquareInstagram />
    </div>
      <div className="header_top_icon_wrapper"> 
        <FaSquareWhatsapp />
    </div>
</div>

<div className="text-gray-500 text-[12px]"> 
    <b>FREE SHIPPING IN NAIROBI</b> FOR ORDERS OVER Ksh 5,000
</div>

<div className="flex gap-4"> 
    <select
    className="text-gray-500 text-[12px] w-[70px]"
    name="currency"
    id="currency"
    >
        <option value="KSH">KSH</option>
        <option value="USD">USD</option>
    </select>
</div>
        </div>   
    </div>
    </div>
};

export default HeaderTop;