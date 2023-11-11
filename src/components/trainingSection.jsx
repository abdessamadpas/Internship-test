import React from 'react'
import DropDown from './UI/dropDown'
import upload from '../assets/images/upload.png'
import { MdDone } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight   } from "react-icons/fi";
import Card from './UI/card';
import data from '../data.json'
function TrainingSection() {

  return (
    <div className='w-full h-full'>
        <div className='sm:px-20 flex flex-col items-center py-10 justify-center gap-3  '>
            {/* top section */}
            <div className='flex items-center justify-between w-full'>
                <div className=''>
                    <p className='text-[#7C7C7C] text-[18px] font-[600] leading-5 '>Edit Training “Working At Height”</p>
                </div>
                <div className='flex items-center gap-5'>
                    <button className='text-[#B5B5B5] text-[13px] font-[700]'>cancel</button>
                    <button className='bg-[#EB7421] text-[14px] font-[700] leading-4 text-white py-2 px-7 rounded-md '>Update & Save</button>
                </div>
            </div>

            {/* 1 section */}
            <div className='grid grid-cols-1 lg:grid-cols-[1.3fr,0.9fr,0.5fr] md:grid-cols-[70%,auto] gap-4 justify-around w-full'>
                {/* left section */}    
                <div className='grid grid-rows-[auto, auto,auto] gap-3 border-[#FFFFFF] border-2 p-3 rounded-lg bg-white shadow-md '>
                    <div className='grid  grid-cols-[30%,auto,20%] w-full  gap-3'>
                        <DropDown category={"Category"} addNew/> 
                        <DropDown category={"Topic"} addNew/> 
                        <DropDown category={"Valid For"} /> 
                    </div>
                    <div className='grid  grid-cols-[65%,auto] w-full  gap-3 '>
                        <DropDown category={'Training'}/> 
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
            {/* 2 section */}
            <div className='border-[#FFFFFF] border-2 rounded-lg bg-white shadow-md w-full p-3'>
                <div className=''>
                    <p className='text-[13px] font-[600] text-[#616161]'>Training quiz</p>
                    <p className='text-[11px] text-[#B4B4B4] '>Here you can manage the questions by clicking on the “Add Question” button and choose from the available types of question. You can add up to 100 questions.</p>
                </div>
                <hr className='my-3'/>
                {/* training quiz */}
                <div className= ' grid grid-cols-1 lg:grid-cols-[70%,auto] md:grid-cols-[70%,auto] rounded-md px-7 py-6 bg-[#F8F8F8] w-full'>
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
                    <div className='flex flex-col justify-between$ p-3  gap-6 '>
                        <div className='flex justify-between'>
                            <p className='text-[13px] font-[600]'>Question Image</p>
                            <p className='text-[12px] font-[500]'>Optional</p>
                        </div>
                        <div className='flex flex-col items-center justify-center border-dashed border-2 rounded-[3px] border-[#DCDCDC] h-full w-full'>
                            <img src= {upload} alt='' width={50} height={50} />
                            <p className='text-[12px] text-center text-[#B5B5B5]'>Drag and drop your image here 
                            <br />
                            Or <span className='text-[#1B8BCE]'>browse files</span> </p>
                        </div>
                    </div>  
                </div>
                {/* add question */}
                <div className=' rounded-[5px] mt-3'>
                    <button className='bg-[#E1EFFF] text-[14px] text-[#2C8EFF] font-[700] leading-4  py-2 px-7 rounded-md w-full'>Add Question +</button>
                </div>
            </div>

            {/* the fucking last section */}
            
        </div> 
        <div className=' w-full px-1 relative sm:px-20 pb-3'>
        {/* container */}
            <div className='flex gap-3 w-full overflow-auto  pb-3'>
                
                {data.map((element)=>
                    <Card defaultValue={element.defaultValue} body={element.bodyText} />
                )}
            
            </div>

            <div className=' absolute top-[50%] translate-x-0 translate-y-[-50%] left-5 bg-white rounded-md p-1'><FiChevronLeft size={25} color='#B6B6B6'/></div>
            <div className=' absolute top-[50%] translate-x-0 translate-y-[-50%] right-5 bg-white rounded-md p-1'><FiChevronRight size={25} color='#B6B6B6'/></div>
            

        </div>   
    </div>
  )
}

export default TrainingSection