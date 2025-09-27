import React from 'react';
import Container from './Container';

const Navbar = () => {
    return (
        <div className='bg-base-100 shadow-sm'>
            <Container>
                <div className=" md:navbar ">
                    <div className="navbar-start">
                        <a className="btn btn-ghost text-4xl text-blue-800 font-normal">Auction <span className='font-extrabold text-4xl text-yellow-500'>Gallery</span></a>
                    </div>
                    <div className='md:navbar-center grid grid-cols-1 text-center md:gap-9 text-2xl '>
                        <a href="">Home</a>
                        <a href="">Actions</a>
                        <a href="">Categories</a>
                        <a href="">How to Work</a>
                    </div>
                    <div className="navbar-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <div className="indicator mr-6b">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
                                <span className="badge badge-sm indicator-item">8</span>
                            </div>
                        </div>
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Navbar;