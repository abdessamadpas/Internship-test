import React from 'react'
import logo  from '../../assets/images/logo.png'
import english from '../../assets/images/english.png'
import profile from '../../assets/images/profile.png'
import { MdNotificationsNone } from "react-icons/md";
import { MdSearch} from "react-icons/md";
import { FiMenu, FiX } from "react-icons/fi";
function HeaderSection() {
    const [open, setOpen] = React.useState(false);
  return (
    <header className='flex flex-row items-center justify-around gap-4 px-4 py-3 bg-white shadow-md w-full'>
        {/* logo & search bar */}
        <div className='flex  items-center gap-10 '>
                <img src= {logo} alt='' className='w-16 h-8 md:w-24 md:h-10' />
            
            <div className="relative flex items-center h-[32px] ">
                <span className="absolute left-3">
                    <MdSearch size={18} color='#BEBEBE'/>
                </span>
                <input
                type="text"
                placeholder="Quick search ..."
                className="bg-[#F6F6F6] w-full text-[#C6C6C6] rounded-[5px] py-2 px-10 focus:outline-none focus:shadow-outline"
                />
            </div>
        </div>
        {/* menu */}
        <nav className=" flex  items-center justify-between">
            <div className={`md:static  absolute md:min-h-fit bg-white min-h-[40vh] left-0 ${open? "top-[9%]": "top-[-100%]" }  w-full md:w-auto flex items-center px-5 z-50`}>
                <div className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 space-x-4 font-[600] text-[14px]">
                    <a href="#" className="hover:text-gray-300">Dashboard</a>
                    <a href="#" className="hover:text-gray-300 text-[#2C8EFF]">Training</a>
                    <a href="#" className="hover:text-gray-300">Users</a>
                    <a href="#" className="hover:text-gray-300">More</a>
                </div>
            </div>
        </nav>
        {/* profile & notification & language */}
        <div className=' hidden md:flex items-center justify-between gap-2'>
            <MdNotificationsNone size={20} color='#A4A4A4'/>
            <img src= {english} className='hidden md:flex' alt='' width={20} />
            <div className='flex items-center justify-center  '>
                <img src= {profile} alt='' width={40} height={40} />
                <div className='hidden lg:flex flex-col items-start justify-center'>
                    <span className='text-[13px] w-[80px] font-[600] text-[#6B6B6B]'>Blaise Defloo</span>
                    <span className='text-[11px] font-[500] text-[#9F9F9F]'>Administrator</span>
                </div>
            </div>
        </div>
        {/* mobile menu */}
        <div className='flex md:hidden items-center justify-between gap-2'>
            <div className='flex items-center justify-center  '>
                <img src= {profile} alt='' width={40} height={40} />
            </div>{
                open ? <FiX className=' cursor-pointer' size={20} color='#A4A4A4'onClick={()=>setOpen((prev)=>!prev)}  /> 
                : <FiMenu  className=' cursor-pointer' size={20} color='#A4A4A4' onClick={()=>setOpen((prev)=>!prev)}/>
            }
           
            <img src= {english} className='hidden md:flex' alt='' width={20} />
            
        </div>
    </header>
  )
}

export default HeaderSection