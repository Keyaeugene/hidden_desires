import React from "react";
import Link from "next/link";
const Navbar = () => { 
    return ( 
    <div className="hidden lg:block"> 
    <div className="container">  
        <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish"> 
  <Link className="navbar__link relative" href="#">Home</Link>
    <Link className="navbar__link relative" href="#">About Us</Link>
      <Link className="navbar__link relative" href="#">Contacts</Link>
        <Link className="navbar__link relative" href="#">products</Link>
        </div>
    </div>
    </div>
    );
};

export default Navbar;