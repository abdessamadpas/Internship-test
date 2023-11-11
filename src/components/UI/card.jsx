import React from 'react'
import { TbExclamationCircle } from "react-icons/tb";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import dice from '../../assets/images/dice.png'

function Card({body, defaultValue}) {
  return (
    <div className='w-full'>
      <div className='flex flex-col justify-center gap-2 items-center w-52 border-[#FFFFFF] border-2 rounded-lg bg-white shadow-md  p-3'>
        <div className='flex justify-end w-full'>
            <TbExclamationCircle size={20} color='#D6D6D6'/>
        </div>
        <img src={dice}/>
        <p className='text-[12px]  text-font-[600] leading-3'>{body}</p>
        <div className='flex gap-2 w-full py-2'>
            <div className='p-1 rounded-[5px] bg-[#F1F1F1]'> <FiMinus size={25} color='#C8C8C8'/></div> 
            <div className='border-[#2C8EFF] text-base font-[600] w-full border-2 rounded-lg text-center text-[#2C8EFF]'>{defaultValue}</div>
            <div className='p-1 rounded-[5px] bg-[#F1F1F1]'> <FiPlus  size={25} color='#C8C8C8'/> </div>
        </div>
      </div>
  </div>
  )
}

export default Card