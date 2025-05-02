import React, { useState } from 'react'
import { IoHomeOutline } from "react-icons/io5"
import { IoCreateOutline } from "react-icons/io5"
import { CgProfile } from "react-icons/cg"
import { Link } from 'react-router-dom'

const FeedSideBar = () => {
  const menuItems = [
    { icon: <IoHomeOutline size={40} />, label: 'Feed', path: '/feed' },
    { icon: <IoCreateOutline size={40} />, label: 'Create', path: '/create' },
    { icon: <CgProfile size={40} />, label: 'Profile', path: '/profile' }
  ]

  const [open, setOpen] = useState(false)
  const [isActive,setIsActive] = useState(false)

  return (
   <>
    <div className='flex flex-row'>
    <div className='flex flex-col gap-10 w-1/4 justify-center items-start h-screen p-4'>
      {menuItems.map((item, index) => (
        <Link 
          key={index}
          to={item.path}
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <span className="text-emerald-400">{item.icon}</span>
          {open && (
            <p className="text-emerald-700 font-medium block">{item.label}</p>
          )}
        </Link>
      ))}
    </div>
    {/* <div className='w-0.5 h-screen bg-white'></div> */}
    </div>
   </>
  )
}

export default FeedSideBar
