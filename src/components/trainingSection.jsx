import React from 'react'
import HeaderTraining from './trainingEdit/header';
import Section1 from './trainingEdit/Section1';
import Section2 from './trainingEdit/Section2';
import Section3 from './trainingEdit/Section3';

function TrainingSection() {

  return (
    <div className='w-full h-full'>
        <div className='sm:px-20 md:px-11 lg:px-22  flex flex-col items-center py-10 justify-center gap-3'>
            <HeaderTraining/>
            <Section1/>     
            <Section2/>
        </div> 
        <Section3/>
    </div>
  )
}

export default TrainingSection