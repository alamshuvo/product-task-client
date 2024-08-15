import React from 'react';
import Nav from '../Components/Nav';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';

const Layout = () => {
    return (
        <div className='font-Condensed'>
            <div className='container mx-auto mt-5 '>
                <Nav></Nav>
            </div>
            <div className='min-h-screen '>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Layout;