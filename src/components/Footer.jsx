import React from 'react'
import foodspace from '../assets/foodspace.png'
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='container mx-auto mt-28 lg:mt-36'>
        <div className='flex justify-around'>
            <div className='flex flex-col items-center space-y-3'>
                <img src={foodspace} alt='foodspace logo' className='h-8 md:h-11'/>
                <p className='space-x-5'>
                    <button>
                        <BsFacebook className='text-lg md:text-xl text-gray-800'/>
                    </button>
                    <button>
                        <BsTwitter className='text-lg md:text-xl text-gray-800'/>
                    </button>
                    <button>
                        <BsInstagram className='text-lg md:text-xl text-gray-800'/>
                    </button>
                </p>
            </div>
            <div className='flex flex-col items-center space-y-1.5'>
                <button>
                    <p className='text-lg md:text-xl font-bold'>Menu</p>
                </button>
                <button className='text-gray-600 font-semibold'>Home</button>
                <button className='text-gray-600 font-semibold'>Drinks</button>
                <button className='text-gray-600 font-semibold'>Snacks</button>
            </div>
            <div className='flex flex-col items-center space-y-1.5'>
                <button>
                    <p className='text-lg md:text-xl font-bold'>Service</p>
                </button>
                <button className='text-gray-600 font-semibold'>Meals Update</button>
                <button className='text-gray-600 font-semibold'>Track Order</button>
                <button className='text-gray-600 font-semibold'>Profiles</button>
                <button className='text-gray-600 font-semibold'>Guarantee</button>
            </div>
            <div className='flex flex-col items-center space-y-1.5'>
                <button>
                    <p className='text-lg md:text-xl font-bold'>Further Information</p>
                </button>
                <button className='text-gray-600 font-semibold'>Terms & Conditions</button>
                <button className='text-gray-600 font-semibold'>Privacy Policy</button>
            </div>
        </div>
        <p className='text-gray-600 font-semibold text-center mt-14  lg:mt-20 mb-6 tracking-wide'>Copyright &copy; 2022 FoodSpace. All Rights Reserved.</p>
    </div>
  )
}

export default Footer