import React from 'react'
import security from '../../assets/images/security.png'
import DropDown from '../UI/dropDown'
import {FiTrash} from "react-icons/fi";
import upload from '../../assets/images/upload.png'


function Section1() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-[1.3fr,0.9fr,0.5fr] md:grid-cols-[70%,auto] gap-4 justify-around w-full'>
        {/* left section */}    
        <div className='grid grid-rows-[auto, auto,auto] gap-3 border-[#FFFFFF] border-2 p-3 rounded-lg bg-white shadow-md '>
            <div className='grid  grid-cols-[30%,auto,20%] w-full  gap-3'>
                <DropDown category={"Category"} addNew icon/> 
                <DropDown category={"Topic"} addNew icon/> 
                <DropDown category={"Valid For"} /> 
            </div>
            <div className='grid  grid-cols-[65%,auto] w-full  gap-3 '>
                <div className=' flex flex-col gap-2 w-full '>
                    <div className='flex items-center justify-between'>
                        <p className='text-[9px] md:text-[12px] font-[600] text-[#616161]'>wewe</p>
                        
                    </div>
                    <div lassName='relative flex flex-col items-center w-full'>
                        <div className=' w-full flex items-center justify-between text-[12px] font-[600] md:px-4 px-2 md:py-2 py-1 rounded-[5px] tracking-wider border-[#DCDCDC]  border-[1px] active:border-[#616161] duration-300'>
                            
                            
                            <p className='text-[9px] md:text-xs '>Safety</p>
                            <div className='flex gap-2 items-center'>
                            <img src= {security} alt='' className='h-4 w-4 md:h-5 md:w-5' />
                            <FiTrash size={15} color='red'/>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <DropDown category={'Assign To'}/> 
            </div>
            <div className='grid  grid-cols-[30%,auto] gap-3'>
                <div className='grid  grid-rows-[auto,auto]'>
                    <DropDown category={"Departments"} optional/> 
                    <DropDown category={"Functions"} optional/> 
                </div>
                <div className='grid  grid-rows-[auto,auto] '>
                    <label className='text-[#7C7C7C] text-[12px] font-[600] leading-5 '>Description</label>
                    <textarea placeholder='Type here' rows="5" cols="50" className=' h-full overflow-auto border-[#DCDCDC] rounded-[5px] border-2 '></textarea>
                </div>
            </div>
        </div>
        {/* middle section */}
        <div className='flex flex-col justify-between border-[#FFFFFF] border-2 p-3 rounded-lg gap-6 bg-white shadow-md '>
            <p>Image</p>
            <div className='flex flex-col items-center justify-center border-dashed border-2 rounded-[3px] border-[#DCDCDC] h-full w-full'>
                <img src= {upload} alt='' width={50} height={50} />
                <p className='text-[12px] text-center text-[#B5B5B5]'>Drag and drop your image here 
                <br />
                Or <span className='text-[#1B8BCE]'>browse files</span> </p>
            </div>
            <p className='text-[11px] font-[600] text-[#B4B4B4]'>*Only JPG, PNG files are allowed. Image must be less than 2 MB</p>
        </div>  
        {/* right section */}
        <div className='flex flex-col justify-between border-[#FFFFFF] border-2 p-3 rounded-lg gap-6 bg-white shadow-md '>
            <p>Training file</p>
            <div className='flex flex-col items-center justify-center border-dashed border-2 rounded-[3px] border-[#DCDCDC] h-full w-full'>
                <img src= {upload} alt='' width={50} height={50} />
                <p className='text-[12px] text-center text-[#B5B5B5]'>Drag and drop your image here 
                <br />
                Or <span className='text-[#1B8BCE]'>browse files</span> </p>
            </div>
            <div className='bg-[#47CA5B] rounded-[5px] '>
                <div className='text-white py-[7px] px-[9px]'>
                    <p className='text-[10px] font-[600]'>Completed</p>
                    <p className='text-[11px] font-[700]'>workingAtHeight.pdf</p>
                </div>
                <div className=''></div>
            </div>
            <p className='text-[11px] font-[600] text-[#B4B4B4]'>*Only Video, PDF and SlideShow files are allowed.</p>
            <div class="flex items-center my-2">
                <div class="border-t flex-grow"></div>
                <span class="mx-2 text-[11px] text-[#AAAAAA]">Or</span>
                <div class="border-t flex-grow"></div>
            </div>            
        </div>  
    </div>
  )
}

export default Section1