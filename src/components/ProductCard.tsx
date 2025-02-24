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
            case 2:
                return( 
                    <div className="flex gap-1 text-[20px] text-[#FF9529]"> 
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                    </div>
                );
            case 3:
                return( 
                    <div className="flex gap-1 text-[20px] text-[#FF9529]"> 
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                    </div>
                );
            case 4:
                return( 
                    <div className="flex gap-1 text-[20px] text-[#FF9529]"> 
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                    </div>
                );
            case 5:
                return( 
                    <div className="flex gap-1 text-[20px] text-[#FF9529]"> 
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    </div>
                );
            default: 
                return null;
        }
    };

    const whatsappNumber = "+254705145028"; 
    const message = `I want to order this product:\n- *Title*: ${title}\n- *Description*: ${description}\n- *Price*: ${price}\n- *Rating*: ${rating} stars`;
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    
    const numericPrice = parseInt(price.replace(/[^0-9]/g, '')) || 0;

    return ( 
        <div className="px-4 border border-gray-200 rounded-xl max-w-[400px]"> 
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
                <div>{generateRating(rating)}</div>

                <div className="font-bold flex gap-4"> 
                    {price}  {/* Displays original string, e.g., "ksh 1,300" */}
                    <del className='text-gray-500 font-normal'> 
                        Ksh {(numericPrice + 800)}.00  {/* Calculated original price */}
                    </del>
                </div>

                <a 
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-2 bg-accent text-white text-center py-2 rounded-md hover:bg-opacity-80 transition"
                >
                    ORDER NOW
                </a>
            </div>
        </div>
    );
};

export default ProductCard;