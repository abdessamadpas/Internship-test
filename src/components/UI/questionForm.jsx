import React from 'react'
import upload from '../../assets/images/upload.png'
import { MdDone } from "react-icons/md";
import { IoClose } from "react-icons/io5";
function QuestionForm() {
  return (
    <div className= 'h-full grid grid-cols-1 lg:grid-cols-[70%,auto] md:grid-cols-[70%,auto] rounded-md px-7 py-6 bg-[#F8F8F8] w-full'>
            <div className='flex flex-col gap-3 w-full'>
                <div className='flex justify-between items-center'>
                    <p>Question 1</p>
                    <IoClose size={20} color='#A4A4A4'/>
                </div>
                <div className=' p-3 rounded-[5px] bg-white border-2 border-[#EBEBEB]'>
                    <p className='text-[12px] font-[600] text-[#616161] ' >Dust-filter respirators may be used for continuous protection while silica sand is used as the blasting abrasive.</p>
                </div>
                <div className='flex justify-between items-center py-2 px-4 rounded-[5px] bg-white border-2 border-[#EBEBEB]'>
                    <p className='text-[12px] font-[600] '>True</p>
                    <div className='flex gap-2 items-center h-[26px] '> 
                        <div className=' rounded p-1 bg-[#E8FFEB]'>
                            <MdDone size={20} color='#B6F6C0'/>
                        </div>
                        <img src= {upload} alt='' className='w-6 h-4' />
                    </div>
                </div>
                <div className='flex justify-between items-center py-2 px-4 rounded-[5px] bg-white border-2 border-[#EBEBEB]'>
                    <p className='text-[12px] font-[600] '>False</p>
                    <div className='flex gap-2 items-center h-[26px] '> 
                        <div className=' rounded p-1 bg-[#48CA5C]'>
                            <MdDone size={20} color='white'/>
                        </div>
                        <img src= {upload} alt='' className='w-6 h-4' />
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-between$ px-3  gap-6 '>
                <div className='flex justify-between'>
                    <p className='text-[13px] font-[600] text-[#616161]'>Question Image</p>
                    <p className='text-[12px] font-[500] text-[#B6B6B6]'>Optional</p>
                </div>
                <div className='flex flex-col items-center justify-center border-dashed border-2 rounded-[3px] border-[#DCDCDC] h-full w-full'>
                    <img src= {upload} alt='' width={50} height={50} />
                    <p className='text-[12px] text-center text-[#B5B5B5]'> Drag and drop your image here 
                    <br />
                    Or <span className='text-[#1B8BCE]'>browse files</span> </p>
                </div>
            </div>  
        </div>
  )
}

export default QuestionForm