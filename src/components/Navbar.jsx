import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-900 text-white p-2 mb-2 flex justify-between h-[10vh] items-center'>
      <div className="logo text-lg mx-4 flex gap-2 items-center">
        <div className="icon">
          <img className='w-12 h-12 rounded-full border-yellow-500 border-2 blur-[0.5px] hover:blur-none hover:cursor-pointer' src="./src/assets/images/pass_new.png" alt="Profile photo" />
        </div>
        <div className="text font-bold">
          i-task todo list
        </div>
      </div>
      <div className="rightside w-[25vw] flex justify-between mx-4">
        <span className=' hover:cursor-pointer transition-all ease-in duration-200 hover:border hover:rounded-xl p-2 hover:border-yellow-200 hover:bg-slate-800'>Home</span>
        <span className=' hover:cursor-pointer transition-all ease-in duration-200 hover:border hover:rounded-xl p-2 hover:border-yellow-200 hover:bg-slate-800'>About</span>
        <span className=' hover:cursor-pointer transition-all ease-in duration-200 hover:border hover:rounded-xl p-2 hover:border-yellow-200 hover:bg-slate-800'>Help</span>
      </div>
    </nav>
  )
}

export default Navbar
