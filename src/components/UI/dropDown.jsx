import React from 'react'
import { RiArrowDownSLine } from "react-icons/ri";
import { RiArrowUpSLine } from "react-icons/ri";
import security from '../../assets/images/security.png'
function DropDown({category,addNew, optional,icon,defaultValue}) {
    const [open, setOpen] = React.useState(false);
    const dropdownRef = React.useRef(null);
    
    React.useEffect(() => {
      const handleOutsideClick = (event) => {
        // Close the dropdown only if it's open and the click is outside of it
        if (open && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setOpen(false);
        }
      };
      // Attach the event listener to handle clicks outside the dropdown
      document.addEventListener('mousedown', handleOutsideClick);
        return () => {
        document.removeEventListener('mousedown', handleOutsideClick);
      };
    }, [open]); 

    return (
    <div className=' flex flex-col gap-2 w-full '>
        <div className='flex items-center justify-between'>
            <p className='text-[9px] md:text-[12px] font-[600] text-[#616161]'>{category}</p>
            {
              addNew && ( <button className='text-[#2C8EFF] text-[9px] md:text-[13px] font-[600]'>Add new +</button> )
            }
            {
              optional && ( <button className='text-[#B8B8B8] text-[10px] font-[600]'>Optional</button> )
            }
        </div>
        <div ref={dropdownRef} className='relative flex flex-col items-center w-full'>
            <button onClick={()=>setOpen((prev)=> !prev)} className=' w-full flex items-center justify-between text-[12px] font-[600] md:px-4 px-2 md:py-2 py-1 rounded-[5px] tracking-wider border-[#DCDCDC]  border-[1px] active:border-[#616161] duration-300 active:text-red-300'>
                <div className='flex gap-2'>
                  {
                    icon && ( <img src= {security} alt='' className='h-4 w-4 md:h-5 md:w-5' /> )
                  }
                  <p className='text-[9px] md:text-xs '>{defaultValue}</p>
                </div>
                {open ? <RiArrowUpSLine size={20} color='#A4A4A4'/> : <RiArrowDownSLine size={20} color='#A4A4A4'/> 
                }
            </button>
            {
                open && (
                    <div className='absolute bg-slate-100 flex flex-col top-10 rounded-lg z-10 w-full  items-start px-4 py-1 gap-4	'>
                      <div className='flex gap-2'>
                        <img src= {security} alt='' className='h-4 w-4 md:h-5 md:w-5' />
                        <h3 className='text-[9px] md:text-xs '>wewe 3</h3>
                      </div>
                      <div className='flex gap-2'>
                        <img src= {security} alt='' className='h-4 w-4 md:h-5 md:w-5' />
                        <h3 className='text-[9px] md:text-xs '>wewe 3</h3>
                      </div>
                    </div>
                )
            } 
        </div>
    </div>
  )
}

export default DropDown