import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';

export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}