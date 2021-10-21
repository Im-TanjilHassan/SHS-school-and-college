import React from 'react';
import img from '../../logo/logo.png'
import './Footer.css'

const Footer = () => {
    return (
        <div className='bg-gray-600 text-center'>
            <img className='w-20 mx-auto pt-8 pb-8' src={img} alt="" />
            <div className='grid grid-cols-2 container mx-auto p-8 text-white'>
                <div>
                    <h3 className='text-2xl font-bold'>New York</h3>
                    <h4 className='font-bold'>Queens, NY</h4>
                    <p>151 Lawrence Street
                        Queens, NY 11201</p>
                    <p>(347) 966-5178</p>
                </div>
                <div>
                    <h4 className='text-2xl font-bold'>FLORIDA</h4>
                    <h5 className='font-bold'>Hialeah, FL</h5>
                    <p>530 West 49th St Hialeah, FL 33012</p>
                    <p>(786) 279-2643</p>
                </div>
            </div>
            <div className='bg-black p-8 text-center text-white'>
                <p>Copyright © 2020 SHS College</p>
            </div>
        </div>
    );
};

export default Footer;