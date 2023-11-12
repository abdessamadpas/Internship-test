import React from 'react'

function NavMenu({open}) {
  
  return (
    <nav className=" flex items-center justify-between">
        <div className={`md:static absolute md:min-h-fit bg-white min-h-[30vh] left-0 ${open? "top-[9%]": "top-[-100%]" }  w-full md:w-auto flex items-center px-5 md:px-0 z-50`}>
            <ul className="flex md:flex-row flex-col md:items-center md:justify-start gap-8 md:gap-[2vw]  font-[600] text-[14px]">
                <li className="hover:text-gray-300 text-[#B6B6B6]  cursor-default">Dashboard</li>
                <li className="hover:text-gray-300 text-[#2C8EFF]  cursor-default">Training</li>
                <li className="hover:text-gray-300 text-[#B6B6B6] cursor-default">Users</li>
                <li className="hover:text-gray-300 text-[#B6B6B6] cursor-default">More</li>
            </ul>
        </div>
    </nav>
  )
}

export default NavMenu