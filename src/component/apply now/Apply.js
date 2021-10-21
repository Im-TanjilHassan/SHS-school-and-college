import React from 'react';
import './Apply.css'

const Apply = () => {
    return (
        <div className='apply-div'>
            <div className='text-center text-white font-bold pt-12 pb-12 space-y-4'>
                <h1 className='text-4xl'>Apply Now</h1>
                <h3 className='text-2xl'>FILL OUT THIS FORM TO APPLY</h3>

            </div>
            <div className='w-4/5 mx-auto p-8'>
                <form action="#">
                    <div class ="user-details">
                        <div class ="input-box">
                            <span class ="details">Full Name</span>
                            <input type ="text" placeholder="Enter your name" required />
                        </div>
                        <div class ="input-box">
                            <span class ="details">Username</span>
                            <input type ="text" placeholder="Enter your username" required />
                        </div>
                        <div class ="input-box">
                            <span class ="details">Email</span>
                            <input type ="text" placeholder="Enter your email" required />
                        </div>
                        <div class ="input-box">
                            <span class ="details">Phone Number</span>
                            <input type ="text" placeholder="Enter your number" required />
                        </div>
                        <div class ="input-box">
                            <span class ="details">Password</span>
                            <input type ="text" placeholder="Enter your password" required />
                        </div>
                        <div class ="input-box">
                            <span class ="details">Confirm Password</span>
                            <input type ="text" placeholder="Confirm your password" required />
                        </div>
                    </div>
                    <div class ="gender-details">
                        <input type ="radio" name="gender" id="dot-1" />
                        <input type ="radio" name="gender" id="dot-2" />
                        <input type ="radio" name="gender" id="dot-3" />
                        <span class ="gender-title">Gender</span>
                        <div class ="category">
                            <label for="dot-1">
                                <span class ="dot one"></span>
                                <span class ="gender">Male</span>
                            </label>
                            <label for="dot-2">
                                <span class ="dot two"></span>
                                <span class ="gender">Female</span>
                            </label>
                            <label for="dot-3">
                                <span class ="dot three"></span>
                                <span class ="gender">Prefer not to say</span>
                            </label>
                        </div>
                    </div>
                    <div class ="button">
                        <input type ="submit" value="Register" />
                    </div>
                </form>
            </div>
        </div>
            );
};

export default Apply;