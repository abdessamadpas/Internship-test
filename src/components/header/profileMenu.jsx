import React from 'react'
import { IoSettingsSharp } from "react-icons/io5";
import { MdOutlinePolicy } from "react-icons/md";
import { RiLogoutBoxRFill } from "react-icons/ri";
function ProfileMenu() {
  return (
    <ul className='absolute top-[54px] left-[-100px] md:right-[-50px] bg-white border border-gray-200 rounded-md shadow-md z-50'>
        <li className='py-3 px-5 cursor-pointer hover:bg-gray-100 '>
           <p className='font-[600] py-1 text-[12px] text-[#313131] '>BESIX Group</p>
           <p className='text-xs font-[400] text-[#797979] '>besix.group@besix.be</p>
        </li>
        <hr className='border-[#EBEBEB]'/>
        <li className='py-3 px-5 cursor-pointer hover:bg-gray-100 flex gap-2'>
            <IoSettingsSharp size={18} color='#797979'/>
            <p className='text-[12px] font-[400] text-[#313131] '>Profile settings</p>
        </li>
        <li className='py-3 px-5 cursor-pointer hover:bg-gray-100 flex gap-2'>
            <MdOutlinePolicy size={18} color='#797979'/>
            <p className='text-[12px] font-[400] text-[#313131] '>Our policies</p>
        </li>
        <hr className='border-[#EBEBEB]'/>

        <li className='py-3 px-5 cursor-pointer hover:bg-gray-100 flex gap-2'>
            <RiLogoutBoxRFill size={18} color='#797979'/>
            <p className='text-[12px] font-[400] text-[#313131] '>Log out</p>
        </li>
    </ul>
  )
}

export default ProfileMenu