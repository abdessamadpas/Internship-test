import React from 'react';
import { language } from '../../data';

function LanguageMenu() {
  return (
    <ul className='absolute top-11 w-52 left-[-100px] md:right-[-10px] bg-white border border-gray-200 rounded-md shadow-md'>
      {language.map((item, index) => (
        <li key={index} className='flex flex-row py-2 px-4 cursor-pointer hover:bg-gray-100'>
          <img className='mr-2' src={process.env.PUBLIC_URL + item.icon} alt='' width={25} />
          <span className='mr-2'>{item.language}</span>
        </li>
      ))}
    </ul>
  );
}

export default LanguageMenu;
