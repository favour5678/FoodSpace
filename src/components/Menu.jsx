import React, { useState } from 'react'
import { items } from '../data/items';

const Menu = () => {
    const [dataItems, setDataItems] = useState(items)
    // console.log(dataItems);

    const filterCategory = (categories) => {
        setDataItems(
            items.filter((item) => {
                return item.category === categories
            })
        )
    };
  
    return (
    <div className='container md:px-3 lg:px-0 mx-auto -mt-10 md:mt-24'>
        <div className='flex justify-center md:justify-between items-end'>
            <div className='space-y-1 hidden md:block'>
                <p className='text-2xl font-semibold'>Our Menu</p>
                <p className='font-medium'>We provide the best food service for you</p>
            </div>
            <ul className='flex md:space-x-2 lg:space-x-4'>
                <button onClick={() => setDataItems(items)} className='hover:bg-red-800 hover:text-white w-20 h-8 rounded-md flex justify-center items-center outline-none'>
                    <li className='font-semibold text-lg'>All</li>
                </button>
                <button onClick={() => filterCategory('meals')} className='hover:bg-red-800 hover:text-white w-20 h-8 rounded-md flex justify-center items-center outline-none'>
                    <li className='font-semibold text-lg'>Meals</li>
                </button>
                <button onClick={() => filterCategory('snacks')} className='hover:bg-red-800 hover:text-white w-20 h-8 rounded-md flex justify-center items-center outline-none'>
                    <li className='font-semibold text-lg'>Snacks</li>
                </button>
                <button onClick={() => filterCategory('drinks')} className='hover:bg-red-800 hover:text-white w-20 h-8 rounded-md flex justify-center items-center outline-none'>
                    <li className='font-semibold text-lg'>Drinks</li>
                </button>
            </ul>
        </div>

        <div className='grid px-10 md:px-0 md:grid-cols-2 lg:grid-cols-4 gap-x-7 gap-y-6 md:gap-y-10 mt-6 md:mt-10 overflow-hidden'>
            {dataItems.map((item, index) => (
                <div key={index} className='border cursor-pointer bg-gray-100 pb-4 shadow-lg rounded-lg hover:scale-105 duration-300'>
                    <img src={item.image} alt={item.name} className='w-full h-[200px] rounded-t-lg object-cover' />
                    <div className='flex flex-col items-center space-y-2 mt-1'>
                        <p className='font-semibold text-lg'>{item.name}</p>
                        <p className='font-bold tracking-wide'>#{item.price}</p>
                        <button className='border-2 border-red-700 px-2 py-1 rounded-md hover:bg-red-100 hidden md:inline-block outline-none'>
                            <p className='text-red-700 font-bold'>Add to cart</p>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Menu;