import React from "react";
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-white p-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <Image src="/Hidden Desires.jpg" alt="Domestico Logo" width={150} height={50} className="mb-4" />
          
        </div>
        <div>
          <h3 className="font-bold mb-3">Category</h3>
          <ul>
            <li>
              <Link href="/category/new-arrivals">
                <span className="cursor-pointer hover:underline">New Arrivals</span>
              </Link>
            </li>
            <li>
              <Link href="/category/sale">
                <span className="cursor-pointer hover:underline">Sale</span>
              </Link>
            </li>
            <li>
              <Link href="/category/top-rated">
                <span className="cursor-pointer hover:underline">Top Rated</span>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-3">Information</h3>
          <ul>
            <li>
              <Link href="/about">
                <span className="cursor-pointer hover:underline">About</span>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <span className="cursor-pointer hover:underline">Contact</span>
              </Link>
            </li>
            <li>
              <Link href="/policy">
                <span className="cursor-pointer hover:underline">Policy</span>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-3">Konto</h3>
          <ul>
            <li>
              <Link href="/account/orders">
                <span className="cursor-pointer hover:underline">Orders</span>
              </Link>
            </li>
            <li>
              <Link href="/account/settings">
                <span className="cursor-pointer hover:underline">Setting</span>
              </Link>
            </li>
            <li>
              <Link href="/account/help">
                <span className="cursor-pointer hover:underline">Help</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center pt-8 border-t border-gray-700 mt-8">
        <p>&copy; {new Date().getFullYear()} HiddenDesire.com</p>
      </div>
    </footer>
  );
};

export default Footer;