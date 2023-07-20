import React, { useState } from 'react'
import foodspace from '../assets/foodspace.png'
import { Link } from 'react-router-dom'
import { FaBars, FaCartShopping, FaGear } from "react-icons/fa6";
import { IoIosContact } from "react-icons/io"
import { MdTrolley } from "react-icons/md"
import { MdOutlinePrivacyTip } from "react-icons/md"
import { BiHelpCircle } from "react-icons/bi"
import { LiaSignOutAltSolid } from "react-icons/lia"
import { AiOutlineCloseCircle } from "react-icons/ai"


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='container max-w-full fixed z-50'>
        <div className='sm:hidden md:h-20 md:flex md:justify-around md:items-center bg-white border-b-2 shadow-md'>
            <div>
                <img src={foodspace} alt="foodspace logo" className='h-12 hidden md:inline-block'/>
            </div>
            <div className='space-x-10 hidden md:flex items-center'>
                <Link className='text-lg text-gray-700 font-semibold hover:text-gray-500 outline-none'>Home</Link>
                <Link className='text-lg text-gray-700 font-semibold hover:text-gray-500 outline-none'>Menu</Link>
                <Link className='text-lg text-gray-700 font-semibold hover:text-gray-500 outline-none'>Contact</Link>
                <Link className='text-lg text-gray-700 font-semibold hover:text-gray-500 uppercase outline-none'>Faq</Link>
                <Link>
                    <FaCartShopping className='text-2xl text-gray-700 font-semibold hover:text-gray-500 uppercase outline-none' />
                </Link>
            </div>
            <Link className='border-2 border-red-400 px-6 py-1 rounded-md hover:bg-red-100 hidden md:inline-block outline-none'>
                <div className='text-lg text-red-500 hover:text-red-600 font-semibold'>Login</div>
            </Link>
        </div>

        {isOpen ? <div className='bg-black opacity-60 fixed w-full h-screen top-0 left-0'></div> : ''}

        <div className='h-16 w-full bg-white flex justify-between items-center px-5 border-b-2 shadow-md md:hidden'>
            <div onClick={() => setIsOpen(!isOpen)} className='text-gray-900 cursor-pointer outline-none'>
                <FaBars className='text-2xl'/>
            </div>
            <FaCartShopping className='text-2xl text-gray-900 outline-none' />
            <div className={isOpen ? 'bg-red-700 h-screen w-1/2 absolute top-0 left-0 duration-1000' : 'bg-red-700 h-screen w-3/4 absolute top-0 left-[-100%] duration-1000'}>
                <div className='flex justify-between px-4 mt-7'>
                    <FaBars className='text-2xl cursor-pointer'/>
                    <AiOutlineCloseCircle onClick={() => setIsOpen(!isOpen)} className='text-white text-3xl cursor-pointer' />
                </div>
                <div className='space-y-7 mt-16'>
                    <Link className='flex items-center text-white space-x-3 px-2 outline-none'>
                        <IoIosContact className='text-2xl'/>
                        <p className='text-lg'>Profile</p>
                    </Link>
                    <div className='border-t border-gray-300 w-[96%] mx-auto'></div>
                    <Link className='flex items-center text-white space-x-3 px-2 outline-none'>
                        <MdTrolley className='text-2xl'/>
                        <p className='text-lg'>My Orders</p>
                    </Link>
                    <div className='border-t border-gray-300 w-[96%] mx-auto'></div>
                    <Link className='flex items-center text-white space-x-3 px-2 outline-none'>
                        <MdOutlinePrivacyTip className='text-2xl'/>
                        <p className='text-lg'>Privacy Policy</p>
                    </Link>
                    <div className='border-t border-gray-300 w-[96%] mx-auto'></div>
                    <Link className='flex items-center text-white space-x-3 px-2 outline-none'>
                        <FaGear className='text-2xl'/>
                        <p className='text-lg'>Settings</p>
                    </Link>
                    <div className='border-t border-gray-300 w-[96%] mx-auto'></div>
                    <Link className='flex items-center text-white space-x-3 px-2 outline-none'>
                        <BiHelpCircle className='text-2xl'/>
                        <p className='text-lg'>Help</p>
                    </Link>
                    <div className='border-t border-gray-300 w-[96%] mx-auto'></div>
                    <Link className='flex items-center text-white space-x-3 px-2 outline-none'>
                        <LiaSignOutAltSolid className='text-2xl'/>
                        <p className='text-lg'>Sign Out</p>
                    </Link>
                    <div className='border-t border-gray-200 w-[96%] mx-auto'></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar