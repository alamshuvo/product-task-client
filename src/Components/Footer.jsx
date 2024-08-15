import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='h-[160px] bg-primary text-[#fff] p-4'>
            <div className='flex justify-between gap-3 items-center'>
                <div className='flex flex-col x gap-3'>
                    <Link to={"/"}>Home</Link>
                    <Link to={"https://www.facebook.com/profile.php?id=100084538193501"}>Facebook</Link>
                    <Link to={"https://www.linkedin.com/in/iftakhar-alam-shuvo/"}>Linkedin</Link>
                </div>
                <div>
                    <p>Please Contact us</p>
                    <p>01980640702</p>
                    <p>iftakharalamshuvo11 <br />@gmail.com</p>

                </div>
            </div>
            <div className='flex justify-center items-center mt-5'>
                <p>All Rights Reserved @2024</p>
            </div>
        </div>
    );
};

export default Footer;