import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';

const MainLayout = () => {
  return (
    <>
    <div className='font-inter'>
      <ScrollRestoration />
      <Navbar />
      <div className='overflow-x-hidden overflow-y-auto'>
        <Outlet />
        <Footer />
      </div>
    </div>
    </>
  )
};

export default MainLayout;