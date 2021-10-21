import React from 'react';
import { NavLink } from 'react-router-dom';
import img from '../../logo/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className='text-center'>
            <div className='p-4 bg-blue-500 text-white'>
                <small>October 22, 2021
                </small>
                <h5 className='font-bold'><i> The last week to register for the Fall semester and apply for scholarships. Apply Today</i></h5>
            </div>
            <div className='nav-bar'>
                <nav className='grid grid-cols-3 text-center'>
                    <div className='text-right mt-6'>
                        <NavLink activeStyle={{
                            fontWeight: "bold",
                            color: "black"
                        }} className=' p-6 bg-green-400 for-hover' to='/home'>Home</NavLink>
                        <NavLink activeStyle={{
                            fontWeight: "bold",
                            color: "black"
                        }} className='ml-6 bg-green-400  p-6 for-hover' to='/about'>About</NavLink>
                        <NavLink activeStyle={{
                            fontWeight: "bold",
                            color: "black"
                        }} className='ml-6 bg-green-400  p-6 for-hover' to='/services'>Services</NavLink>
                    </div>
                    <img className='w-20 ml-44' src={img} alt="" />
                    <div className='text-left mt-6'>
                        <NavLink activeStyle={{
                            fontWeight: "bold",
                            color: "black"
                        }} className=' p-6 bg-green-400 for-hover' to='/news'>News</NavLink>
                        {/* <NavLink activeStyle={{
                            fontWeight: "bold",
                            color: "black"
                        }} className=' p-6 bg-green-400 for-hover' to='/admission'>Admisson</NavLink> */}
                        <NavLink activeStyle={{
                            fontWeight: "bold",
                            color: "black"
                        }} className=' p-6 bg-green-400 for-hover' to='/apply'>Apply now</NavLink>
                    </div>
                </nav>

            </div>
            <div>

            </div>
        </div>
    );
};

export default Header;