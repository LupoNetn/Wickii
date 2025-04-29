import React from 'react'
import Navbar from './Navbar'

import BottomBar from './BottomBar';
import Footer from './Footer'
import { Outlet } from 'react-router-dom';

const AuthorizedLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default AuthorizedLayout
