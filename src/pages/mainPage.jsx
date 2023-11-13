import React from 'react'
import HeaderSection from '../components/header/header-section';
import TrainingSection from '../components/trainingSection';

function MainPage({data}) {
  return (
    <div className=" flex flex-col justify-center items-center  h-full  w-full  ">
      <HeaderSection language={data.language}/>
      <div className=' px-2 w-full sm:w-full h-full flex justify-center items-center    '>
        <TrainingSection cards={data.cards}/>
      </div>
    </div>
  )
}

export default MainPage