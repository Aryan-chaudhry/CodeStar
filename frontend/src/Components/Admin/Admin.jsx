import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import image from '../../assets/Admin.png'
import { NavLink } from 'react-router-dom'

function Admin({darkMode}){ 

  return (
    <div className= {darkMode ? "text-green flex flex-wrap justify-center  gap-20 m-30" : "flex justify-center gap-20 h-full m-30"}>
      
      <div className='bg-orange-300  w-200 h-130 border-black-1 rounded-4xl rotate-x-15 -rotate-y-30'>
        <img src={image} alt="" className='overflow-hidden rounded-4xl rotate-x-16 -rotate-y-35'  />
      </div>

      <div className=' w-[30%]'>
        <div className='mt-30'>
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-orange-300 leading-tight mt-30">
          Welcome to {' '}
          <span className={darkMode ? "text-white" : "text-black"}>
            <Typewriter
              words={[
                ' Admin Page',
                ' Boost our Bussiness',
                ' become India largest coding platform',
              ]}
              loop={Infinity}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1200}
            />
          </span>
        </h1>
        </div>
        
        <div>
               <div className='flex justify-center gap-10 mt-40 bottom-30 fixed z-100'>
                  <button className='w-30 h-15 bg-orange-300 rounded-3xl font-bold cursor-pointer'><NavLink to='/admin/signup' >SignUp</NavLink></button>
                  <button className={ darkMode ? 'w-30 h-15 bg-white text-black rounded-3xl font-bold cursor-pointer' : 'w-30 h-15 bg-black text-white rounded-3xl font-bold cursor-pointer'}><NavLink to='/admin/login' >Login</NavLink></button>
              </div>

              <div className='mt-40 bottom-10 fixed z-100'>
                  <button className={ darkMode ? 'w-70 h-15 bg-white text-black rounded-3xl font-bold cursor-pointer' : 'w-70 h-15 bg-black text-white rounded-3xl font-bold cursor-pointer'}><NavLink to='/admin/dashboard' >Dashboard</NavLink></button>
              </div>
        </div>
       
        
    
      </div>
    </div>
  )
}

export default Admin
