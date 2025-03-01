import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-900 text-white p-0 text-[12px] sm:text-lg sm:p-2 mb-2 flex justify-between h-12 sm:h-20 items-center w-[100vw] '>
      <div className="logo  mx-1 sm:mx-4 flex gap-2 items-center">
        <div className="icon">
          <img className='sm:w-12 sm:h-12 rounded-full  hover:cursor-pointer' src="/icon.svg" alt="Profile photo" />
        </div>
        <div className="text font-semibold sm:font-bold">
          my_todos
        </div>
      </div>
      <div className="rightside  flex justify-between mx-1 sm:mx-4 gap-1">
        <span className=' hover:cursor-pointer transition-all ease-in duration-200 hover:border hover:rounded-xl p-1 sm:p-2 hover:border-yellow-200 hover:bg-slate-800'>Home</span>
        <span className=' hover:cursor-pointer transition-all ease-in duration-200 hover:border hover:rounded-xl p-1 sm:p-2 hover:border-yellow-200 hover:bg-slate-800'>About</span>
        <span className=' hover:cursor-pointer transition-all ease-in duration-200 hover:border hover:rounded-xl p-1  sm:p-2 hover:border-yellow-200 hover:bg-slate-800'>Help</span>
      </div>
    </nav>
  )
}

export default Navbar
