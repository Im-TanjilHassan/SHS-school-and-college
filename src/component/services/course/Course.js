import React from 'react';
import './Course.css'

const Course = (props) => {
    const { guid, price, picture, title, registered, description } = props.course
    return (
        <div className='course-card'>
            <img className='course-img' src={picture} alt="" />
            <div className='text-center space-y-3'>
                <h3 className='text-2xl font-bold'>{title}</h3>
                <p>{description}</p>
                <p>Mentor: <span className='font-bold'>{guid}</span></p>
                <div className='grid grid-cols-2 gap-0'>
                    <p>price: <span className='font-bold'>{price}</span></p>
                    <p className='font-bold'>Registration: {registered}</p>
                </div>
            </div>
        </div>
    );
};

export default Course;