import React, { use, useState } from 'react';
import Container from './Container';
import FavItems from './FavItems';
import Item from './Item';

const ManageAuction = ({ promiseData }) => {
    const itemsData = use(promiseData);
    const [data, setData] = useState(itemsData)
    return (
        <Container>
            <div>
                <h1 className='text-3xl '>Active Auctions</h1>
                <p className='text-lg mb-6'>Discover and Bid on extraordinary items</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                <div className='col-span-2 bg-white rounded-3xl text-lg font-semibold'>
                    <div className=' grid grid-cols-2 p-8 border-b-2 border-b-gray-200'>
                        <h1>Items</h1>
                        <div className='flex justify-around'>
                            <p>Current Bid</p>
                            <p>Time Left</p>
                            <p>Bid Now</p>
                        </div>
                    </div>
                    <div>
                        {
                            data.map(item => <Item key={item.id} item={item} />)
                        }
                    </div>
                </div>
                <div>
                    <FavItems />
                </div>
            </div>

        </Container>
    );
};

export default ManageAuction;