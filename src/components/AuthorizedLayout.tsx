import React from 'react'
import Navbar from './Navbar'

import BottomBar from './BottomBar';
import { Outlet } from 'react-router-dom';

const AuthorizedLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <BottomBar />
    </>
  )
}

export default AuthorizedLayout
