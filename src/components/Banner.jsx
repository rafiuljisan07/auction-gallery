import React from 'react';
import BannerImg from '../assets/Banner-min.jpg'
import Container from './Container';

const Banner = () => {
    return (
        <div className='h-[550px] bg-left md:bg-right bg-cover mb-20 p-4' style={{ backgroundImage: `url(${BannerImg})` }}>
            <Container>
                <div className='text-white flex flex-col justify-center h-[550px] '>
                    <h1 className='text-6xl font-semibold'>Bid on Unique Items from <br />Around the World</h1>
                    <p className='text-xl my-6 text-gray-300'>Discover rare collectibles, luxury goods, and vintage <br />treasures in our curated auctions</p>
                    <button className=' btn w-fit  text-black text-xl p-6 rounded-4xl'>Explore Auctions</button>
                </div>
            </Container>
        </div>
    );
};

export default Banner;