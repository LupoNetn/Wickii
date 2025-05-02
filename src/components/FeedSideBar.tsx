import React, { useState } from 'react'
import { IoHomeOutline } from "react-icons/io5"
import { IoCreateOutline } from "react-icons/io5"
import { CgProfile } from "react-icons/cg"
import { NavLink } from 'react-router-dom'

const FeedSideBar = () => {
  const menuItems = [
    { icon: <IoHomeOutline size={40} />, label: 'Feed', path: '/feed' },
    { icon: <IoCreateOutline size={40} />, label: 'Create', path: '/create' },
    { icon: <CgProfile size={40} />, label: 'Profile', path: '/profile' }
  ]

  const [open, setOpen] = useState(false)

  return (
    <div className='flex flex-row'>
      <div className='flex flex-col gap-10 w-1/4 justify-center items-start h-screen p-4'>
        {menuItems.map((item, index) => (
          <NavLink 
            key={index}
            to={item.path}
            className={({ isActive }) => 
              `flex items-center gap-3 p-3 rounded-lg transition-colors
              ${isActive 
                ? 'bg-emerald-100 text-emerald-600' 
                : 'hover:bg-gray-100 text-gray-600 hover:text-emerald-500'
              }`
            }
          >
            <span>{item.icon}</span>
            {open && (
              <p className="font-medium block">{item.label}</p>
            )}
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default FeedSideBar
