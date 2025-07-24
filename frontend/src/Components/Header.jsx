import React from 'react'
import { NavLink } from 'react-router-dom'


function Header() {
  return (
    <header className='bg-zinc-200 py-3 px-6 w-full'>
      <div>
        {/* <img src={Logo} alt="Logo" className="h-10 w-10" /> */}

        <ul className='flex justify-end-safe gap-x-15 text-lg font-medium'>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive ? 'text-gray-800  underline underline-offset-4' : 'text-gray-800'
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/prepare'
              className={({ isActive }) =>
                isActive ? 'text-gray-800 underline underline-offset-4' : 'text-gray-800'
              }
            >
              Prepare
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/interview'
              className={({ isActive }) =>
                isActive ? 'text-gray-800 underline underline-offset-4' : 'text-gray-800'
              }
            >
              Interview
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/profile'
              className={({ isActive }) =>
                isActive ? 'text-gray-800 underline underline-offset-4' : 'text-gray-800'
              }
            >
              <div className="flex gap-1">
                <div className='w-10 h-10 border-1 rounded-full'><img  className='w-full h-full overflow-hidden p-5' /></div>
                <div>Profile</div>
                </div>
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
