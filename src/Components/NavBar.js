import React from 'react'

export default function NavBar() {
  return (
    <div>
    
      <div className="container flex justify-between items-center w-full h-20 bg-slate-500 px-[2%] z-30">

        <div className="logo font-bold text-5xl text-white basis-1/3 text-start flex items-center">Melodelik</div>

        <div className="searchBar basis-1/3 flex items-center justify-center">

          <div className='bg-white rounded-full h-8 w-[60%] hover:w-[80%] transition-all delay-150'>

            <input type="text" />

          </div>

        </div>

        <div className="profile flex justify-end basis-1/3">

          <div className="border border-black w-12 h-12 rounded-full"></div>

        </div>

      </div>
    
    </div>
  )
}
