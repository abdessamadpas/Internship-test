import React, {useRef} from 'react'
import logo  from '../../assets/images/logo.png'
import english from '../../assets/images/english.png'
import profile from '../../assets/images/profile.png'
import { MdNotificationsNone } from "react-icons/md";
import { MdSearch} from "react-icons/md";
import { FiMenu, FiX } from "react-icons/fi";
import ProfileMenu from './profileMenu';
import LanguageMenu from './languageMenu';
import NavMenu from './navMenu';

function HeaderSection({language}) {
    const [open, setOpen] = React.useState(false);
    const [openProfile, setOpenProfile] = React.useState(false);
    const [openlanguage , setOpenlanguage ] = React.useState(false);

    const ProfileRef = useRef(null);
    const languageRef = useRef(null);

    React.useEffect(() => {
      const handleOutsideClick = (event) => {
        if (openProfile && ProfileRef.current && !ProfileRef.current.contains(event.target)) {
          setOpenProfile(false);
        }
      };
      document.addEventListener('mousedown', handleOutsideClick);
        return () => {
        document.removeEventListener('mousedown', handleOutsideClick);
      };
    }, [openProfile]); 
   
    React.useEffect(() => {
      const handleOutsideClick = (event) => {
        if (openlanguage && languageRef.current && !languageRef.current.contains(event.target)) {
            setOpenlanguage(false);
        }
      };
      document.addEventListener('mousedown', handleOutsideClick);
        return () => {
        document.removeEventListener('mousedown', handleOutsideClick);
      };
    }, [openlanguage]); 


    const handlelanguageClick = () => {
        setOpenlanguage((prev) => !prev);
    };
    const handleProfileClick = () => {
        setOpenProfile((prev) => !prev);
    };
  return (
    <div className='flex flex-row items-center justify-around  bg-white  shadow-md w-full '>
       <header className='flex flex-row items-center justify-around gap-4 px-4 py-3 w-full max-w-[1700px]'>
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
        <NavMenu open={open} />
        {/* profile & notification & language */}
        <div className=' hidden md:flex items-center justify-between gap-2'>
            <MdNotificationsNone size={20} color='#A4A4A4'/>
            <div className='relative' ref={languageRef}>
               <img src= {english} className='hidden md:flex' alt='' width={20} onClick={handlelanguageClick}/>
                {openlanguage && (<LanguageMenu language={language}/>)}   
            </div>
            
            <div className='flex items-center justify-center  '>
                <div ref={ProfileRef} className='relative'>
                    <img src= {profile} alt='' width={40} height={40} onClick={handleProfileClick}/>
                    {openProfile && (<ProfileMenu/>)}
                </div>
                <div className='hidden lg:flex flex-col items-start justify-center'>
                    <span className='text-[13px] w-[80px] font-[600] text-[#6B6B6B]'>Blaise Defloo</span>
                    <span className='text-[11px] font-[500] text-[#9F9F9F]'>Administrator</span>
                </div>
            </div>
           
        </div>

        {/* mobile menu */}
        <div className='flex md:hidden items-center justify-between gap-2'>
            <div className='flex items-center justify-center' onClick={handleProfileClick}>
                <div ref={ProfileRef} className='relative'>
                    <img src= {profile} alt='' width={40} height={40}/>
                    {openProfile && (<ProfileMenu/>)}
                </div>
            </div>
            {
                open ? <FiX className=' cursor-pointer' size={20} color='#A4A4A4'onClick={()=>setOpen((prev)=>!prev)}  /> 
                : <FiMenu  className=' cursor-pointer' size={20} color='#A4A4A4' onClick={()=>setOpen((prev)=>!prev)}/>
            }
        </div>
    </header>
    </div>
   
  )
}

export default HeaderSection