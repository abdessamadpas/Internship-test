import React from 'react'
import HeaderTraining from './trainingEdit/header';
import Section1 from './trainingEdit/Section1';
import Section2 from './trainingEdit/Section2';
import Section3 from './trainingEdit/Section3';

function TrainingSection({cards}) {

  
  return (
    <div className='w-full h-full max-w-[1400px]'>
      <div className='px-3 md:px-11 lg:px-20 flex flex-col items-center py-10 justify-center gap-3'>
          <HeaderTraining />
          <Section1 />     
          <Section2 />
      </div> 
      <Section3 cards={cards}/>
    </div>
  )
}

export default TrainingSection