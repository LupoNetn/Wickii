import React from 'react'
import { IoHomeOutline } from "react-icons/io5"
import { IoCreateOutline } from "react-icons/io5"
import { CgProfile } from "react-icons/cg"
import { Link, useLocation } from 'react-router-dom'

const FeedBottomBar = () => {
  const location = useLocation()
  
  const menuItems = [
    { icon: <IoHomeOutline size={24} />, label: 'Feed', path: '/feed' },
    { icon: <IoCreateOutline size={24} />, label: 'Create', path: '/create' },
    { icon: <CgProfile size={24} />, label: 'Profile', path: '/profile' }
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden">
      <div className="flex justify-around items-center h-16">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={`flex flex-col items-center p-2 ${
              location.pathname === item.path
                ? 'text-emerald-500'
                : 'text-gray-500 hover:text-emerald-500'
            }`}
          >
            <span className="mb-1">{item.icon}</span>
            <span className="text-xs">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default FeedBottomBar
