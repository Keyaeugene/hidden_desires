import Image from 'next/image';
import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

interface propsType { 
    img: string;
    title: string;
    description: string;
    rating: number;
    price: string;
}

const ProductCard: React.FC<propsType> = ( 
    {img, title, description, rating, price}
) => { 

    const generateRating = (rating: number) => { 
        switch (rating) { 
            case 1:
                return( 
                    <div className="flex gap-1 text-[20px] text-[#FF9529]"> 
                    <AiFillStar />
                    <AiOutlineStar />
                     <AiOutlineStar />
                      <AiOutlineStar />
                       <AiOutlineStar />
                    </div>
                );
                default: 
                return null;
        }
    };
    return ( 
        <div className="px-4 border border-gray-200 rounded-xl max-w-[400]"> 
        <div> 
            <Image
            className="w-full h-auto"
            src={img}
            width={200}
            height={300}
            alt={title}
            />
        </div>

        <div className='space-y-2 py-2'> 
            <h2 className="text-accent font-medium uppercase">{title}</h2>
            <p className="text-gray-500 max-w-[150px]">{description}</p>
        </div>
        </div>
    );
};

export default ProductCard;