import React, { useEffect, useState } from 'react';
import Course from './course/Course';

const Services = () => {
    const [courses, setCourses] = useState([])
    useEffect( () => {
        fetch('./fakedata.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    } , [])
    return (
        <div>
            <h1 className='text-center mt-8 mb-8 font-bold text-4xl'>Our <span className='text-green-500'> Services</span></h1>
            <div className='container mx-24 grid grid-cols-3 mb-12'>
                {
                    courses.map(course => <Course
                    key={course._id}
                    course = {course}
                    ></Course>)
                }
            </div>
        </div>
    );
};

export default Services;