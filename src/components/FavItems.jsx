import React from 'react';
import { FaRegHeart } from 'react-icons/fa';

const FavItems = () => {
    return (
        <div className='bg-white rounded-3xl'>
            <div className='flex justify-center items-center gap-3 text-3xl p-7 border-b-2 border-b-gray-200'>
                <p> <FaRegHeart /></p>
                <h1>Favorite Items</h1>
            </div>
            <div className='text-center border-b-2 border-b-gray-200 p-16'>
                <h1 className=' text-2xl font-semibold'>No Favorites yet</h1>
                <p className='text-lg text-gray-500'>Click the Heart icon on any item <br /> to add it to your favorites</p>
            </div>
            <div className='text-3xl flex justify-between p-7'>
                <h1>Total Bids Amounts</h1>
                <p><span>$</span> 0000</p>

            </div>
        </div>
    );
};

export default FavItems;