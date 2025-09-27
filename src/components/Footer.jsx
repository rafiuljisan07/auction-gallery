import React from 'react';

const Footer = () => {
    return (
        <div className='bg-white mt-20 py-40 px-4 flex justify-center md:items-center flex-col space-y-6'>
            <a className="text-4xl text-blue-800 font-normal">Auction <span className='font-extrabold text-4xl text-yellow-500'>Gallery</span></a>
            <div className='flex gap-9 text-2xl font-semibold'>
                <a href="">Bid.</a>
                <a href="">Win.</a>
                <a href="">Own.</a>
            </div>
            <div className='flex md:flex-row flex-col gap-2  md:gap-9 text-2xl '>
                <a href="">Home</a>
                <a href="">Actions</a>
                <a href="">Categories</a>
                <a href="">How to Work</a>
            </div>
            <p className='text-xl'>&copy; 2025 AuctionHub. All rights reserved</p>
        </div>
    );
};

export default Footer;