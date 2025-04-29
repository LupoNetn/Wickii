import React from 'react'
import { FiSun, FiMoon } from 'react-icons/fi'

const Navbar = () => {
  const [isDark, setIsDark] = React.useState(false)

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <nav className='p-4 lg:px-14 lg:py-5 shadow-xl'>
      <div className='flex justify-between items-center'>
        <div>
          <span className='text-2xl'>WICKII</span>
        </div>
        <button 
          onClick={toggleTheme}
          className='p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800'
        >
          {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
