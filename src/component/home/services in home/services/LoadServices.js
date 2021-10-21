import React from 'react';
import './LoadServices.css'

const LoadServices = (props) => {
    console.log(props.data)
    const {guid, price, picture, title, registered} = props.data
    console.log(guid)
    return (
        <div className='card'>
            <div className='grid grid-cols-2 w-full'>
                <div className='thumbneil'>
                    <img src={picture} alt="" />
                </div>
                <div className='space-y-6 p-3'>
                    <h1 className='text-2xl font-bold'>{title}</h1>
                    <p>Mentor: <span className='font-bold'>{guid}</span></p>
                    <div className='grid grid-cols-2 gap-0'>
                        <p>price: <span className='font-bold'>{price}</span></p>
                        <p className='font-bold'>Registration: {registered}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoadServices;