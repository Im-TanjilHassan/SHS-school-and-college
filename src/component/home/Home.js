import React from 'react';
import { useHistory } from 'react-router';
import './Home.css'
import Hservices from './services in home/Hservices';

const Home = () => {
    const history = useHistory()
    const handleApply = () => {
        history.push('/apply')
    }

    return (
        <div>
            <div className='header-container'>
                <h1 className='text-5xl font-bold pt-40 mb-12'>SHS College and University</h1>
                <p className='w-2/4 ml-80'>At SHS College, no student is left behind. We care about each student and provide incredible support on their academic and professional journey.</p>
                <br />
                <button className='btn'>Get Information</button>
                <button className='btn' onClick={handleApply}>Apply Now</button>
            </div>
            <Hservices></Hservices>
        </div>
    );
};

export default Home;