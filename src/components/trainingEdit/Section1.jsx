import React from 'react'
import DropDown from '../UI/dropDown'
import {FiTrash} from "react-icons/fi";
import upload from '../../assets/images/upload.png'

function Section1() {
  return (
    <div className='grid grid-flow-row-dense  grid-cols-6  gap-4 justify-around w-full'>
        {/* left section */}    
        <div className='col-span-6 md:col-span-4 lg:col-span-3 grid grid-rows-[auto, auto,auto] gap-3 border-[#FFFFFF] border-2 p-3 rounded-lg bg-white shadow-md '>
            <div className='grid grid-cols-1 sm:grid-cols-[30%,auto,20%] w-full gap-3'>
                <DropDown category={"Category"} addNew icon={'/icons/safety.png'} defaultValue={"Safety"}/> 
                <DropDown category={"Topic"} addNew icon={'/icons/vca.png'} defaultValue={"VCA"}/> 
                <DropDown category={"Valid For"} defaultValue={"1 year"}/> 
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-[65%,auto] w-full  gap-3 '>
                <div className=' flex flex-col gap-2 w-full '>
                    <div className='flex items-center justify-between'>
                        <p className=' text-[12px] font-[600] text-[#616161]'>Training</p>
                    </div>
                    <div lassName='relative flex flex-col items-center w-full'>
                        <div className=' w-full flex items-center justify-between text-[12px] font-[600]  px-4  py-2 rounded-[5px] tracking-wider border-[#DCDCDC]  border-[1px] active:border-[#616161] duration-300'>
                            <p className='text-xs '>Working at height</p>
                            <div className='flex gap-2 items-center'>
                                <img src= {process.env.PUBLIC_URL + '/icons/vca.png'} alt='' className='h-5 w-5' />
                                <FiTrash size={15} color='red'/>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <DropDown category={'Assign To'} defaultValue={"Internal workers"}/> 
            </div>
            <div className='grid  sm:grid-cols-[35%,auto] gap-3'>
                <div className='grid  grid-rows-[auto,auto]'>
                    <DropDown category={"Departments"} optional defaultValue={'Select departments'}/> 
                    <DropDown category={"Functions"} optional defaultValue={'Select functions'}/> 
                </div>
                <div className='grid  grid-rows-[auto,auto] '>
                    <label className='text-[#7C7C7C] text-[12px] font-[600] leading-5 '>Description</label>
                    <textarea placeholder='Type here..' rows="5" cols="1" className=' h-full w-full overflow-auto border-[#DCDCDC] rounded-[5px] border-2 '></textarea>
                </div>
            </div>
        </div>
        {/* middle section */}
        <div className='col-span-6 md:col-span-2 lg:col-span-2 flex flex-col justify-between border-[#FFFFFF] border-2 p-3 rounded-lg gap-6 bg-white shadow-md '>
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
        <div className='col-span-6 md:col-span-6 lg:col-span-1 flex flex-col justify-between border-[#FFFFFF] border-2 p-3 rounded-lg gap-2 bg-white shadow-md '>
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
            <div class="flex items-center my-1">
                <div class="border-t flex-grow"></div>
                <span class="mx-2 text-[11px] text-[#AAAAAA]">Or</span>
                <div class="border-t flex-grow"></div>
            </div>
            <div className='flex flex-col gap-2 items-center'>
                <p className='text-[13px] font-[600] text-[#616161] w-full text-start'> Media URL</p>
                <input type='text' placeholder='https://youtu.be/1g4hoZx8-o4' className='border-[#DCDCDC] rounded-[5px] border-2 px-2 py-1 w-full'/>
            </div>            
        </div>  
    </div>
  )
}

export default Section1