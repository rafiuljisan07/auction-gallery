import React from 'react';
import { FaRegHeart } from 'react-icons/fa';

const Item = ({ item }) => {
    console.log(item)
    const { title, image, timeLeft, currentBidPrice } = item;
    return (
        <div className='grid grid-cols-2 p-4 pr-9 border-b-2 border-b-gray-200'>
            <div className='flex items-center gap-5'>
                <img className='w-[96px] h-[96px] object-cover object-center' src={image} alt="" />
                <h1>{title}</h1>
            </div>
            <div className='flex justify-around items-center'>
                <p>{currentBidPrice}</p>
                <p>{timeLeft}</p>
                <FaRegHeart/>
            </div>
        </div>
    );
};

export default Item;