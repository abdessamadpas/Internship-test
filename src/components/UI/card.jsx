import React from 'react'
import { Tooltip } from 'antd';
import { TbExclamationCircle } from "react-icons/tb";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
function Card({body, defaultValue, iconSrc,description, counterType}) {
  const [value, setValue]= React.useState(defaultValue)

  React.useEffect(() => {
    document.documentElement.scrollTop = document.documentElement.clientHeight;
    document.documentElement.scrollLeft = document.documentElement.clientWidth;
  }, []);

  const increment = () => {
    if(value<100)
    setValue(value+1)
  }

  const decrement = () => {
    if(value>0)setValue(value-1)
  }

  return (
    <div className='w-full '>
      <div className='flex flex-col  gap-2 items-center w-52 border-[#FFFFFF] border-2 rounded-lg bg-white shadow-md  p-3'>
        <div className='flex justify-end w-full'>
          <Tooltip  title={description} trigger="click" placement="bottom" color='white' overlayStyle={{maxWidth:"150px", fontWeight:400, textAlign: 'justify'}}  overlayInnerStyle={{color:"black", fontSize: '10px'}} >
            <TbExclamationCircle color='#D6D6D6' size={21}/>
          </Tooltip>
        </div>  
        <img src={iconSrc} alt=''/>
        <p className='text-[12px]  text-font-[600] leading-3'>{body}</p>
        <div className='flex gap-2 w-full py-2'>
            <button className='p-1 rounded-[5px] bg-[#F1F1F1] cursor-pointer'onClick={decrement}> <FiMinus  size={25} color='#C8C8C8'/></button> 
            <div className='flex justify-center items-center border-[#2C8EFF] text-[14px] font-[600] w-full border-2 rounded-lg text-center text-[#2C8EFF]'>{value} {counterType}</div>
            <button className='p-1 rounded-[5px] bg-[#F1F1F1] cursor-pointer'onClick={increment}> <FiPlus  size={25} color='#C8C8C8'/> </button>
        </div>
      </div>
  </div>
  )
}

export default Card