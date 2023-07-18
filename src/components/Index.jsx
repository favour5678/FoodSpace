import React from 'react';
import foodspace from '../assets/foodspace.png'
import googleLogo from '../assets/googleLogo.png'
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className='container mx-auto flex justify-center mt-20 md:mt-12 lg:mt-14 xl:mt-28 h-100'>
        <form className='flex flex-col bg-white shadow-xl border px-10 lg:px-24 rounded-3xl'>
            <div className='mt-10 md:mt-11 flex justify-center'>
                <img className='h-12 md:h-20 lg:h-24 object-cover' src={foodspace} alt="foodspace logo" />
            </div>
            <div className='flex flex-col mt-6 space-y-4'>
                <input type="email" placeholder='Email address' className='w-full h-11 lg:h-14 border rounded-full outline-none placeholder:pl-3 shadow-md'/>
                <input type="password" placeholder='Password' className='w-full border rounded-full h-11 lg:h-14 outline-none  placeholder:pl-3 shadow-md'/>
            </div>
            <div className='flex flex-col items-center md:flex md:flex-row md:justify-between space-y-3 md:space-y-0 mt-5 sm:mt-5'>
                <div className='flex'>
                    <input type="checkbox"/>
                    <p className='font-semibold lg:text-xl ml-2'>Remember me</p>
                </div>
                <p>
                    <a href="#" className='text-red-700 font-semibold lg:text-xl'>Forgot Password?</a>
                </p>
            </div>
            <Link to={'/heroPage'} className='mt-6 md:px-40 py-1 md:py-2 lg:py-3 w-full bg-red-700 hover:bg-red-800 duration-300 rounded-full text-white uppercase tracking-wider cursor-pointer'>
                <div className='text-center lg:text-xl lg:font-semibold'>Sign In</div>
            </Link>
            <div className='flex justify-evenly items-center mt-6'>
                <div className='w-[60px] md:w-[140px] h-[1px] bg-gray-300'></div>
                <div className='uppercase text-sm sm:text-base lg:text-lg font-semibold'>Or</div>
                <div className='w-[60px] md:w-[140px] h-[1px] bg-gray-300'></div>
            </div>
            <div className='flex justify-center items-center space-x-6 mt-2'>
                <a href="#">
                    <img src={googleLogo} alt="google-logo" className='h-[40px] md:h-[50px] lg:h-[65px] object-cover'/>
                </a>
                <a href="#">
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png' alt="facebook-logo" className='h-[25.3px] md:h-[30px] lg:h-[41px] object-cover'/>
                </a>
            </div>
        </form>
    </div>
  )
}

export default Index