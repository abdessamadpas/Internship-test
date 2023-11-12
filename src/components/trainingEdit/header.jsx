import React from 'react'

function HeaderTraining() {
  return (
    <div className='flex items-center justify-between w-full'>
        <div className=''>
            <p className='text-[#7C7C7C] text-[14px]  md:text-[18px]  md:font-[600] leading-5 '>Edit Training “Working At Height”</p>
        </div>
        <div className='flex items-center gap-5'>
            <button className='text-[#B5B5B5] text-[11px] md:text-[13px] font-[700]'>cancel</button>
            <button className='bg-[#EB7421] text-[11px] md:text-[14px] font-[700] leading-4 text-white py-1 md:py-2 px-4 md:px-7 rounded-md '>Update & Save</button>
        </div>
    </div>
  )
}

export default HeaderTraining