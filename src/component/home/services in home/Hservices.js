import React, { useEffect, useState } from 'react';
import LoadServices from './services/LoadServices';

const Hservices = () => {
    const [datas, setDatas] = useState([])

    useEffect( () => {
        fetch('./fakedata.json')
        .then(res => res.json())
        .then(data => setDatas(data))
    } ,[])

    const filterdData = datas.filter(data => data._id < 5)
    return (
        <div className='mb-12'>
            <h1 className='text-4xl mb-6 font-bold text-center'>Services we provide:</h1>
            <div className='grid grid-cols-2 gap-12'>
                {
                    filterdData.map(data => <LoadServices
                    key = {data._id}
                    data = {data}
                    ></LoadServices>)
                }
            </div>
        </div>
    );
};

export default Hservices;