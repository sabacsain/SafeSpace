import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className='flex flex-col w-full h-screen overflow-hidden font-inter'>
      <Navbar />
      <div className='flex-1 overflow-x-hidden overflow-y-auto'>
        <Outlet />
        <Footer />
      </div>
    </div>
  )
};

export default MainLayout;