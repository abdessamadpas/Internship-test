import React from 'react'
import QuestionForm from '../UI/questionForm';

function Section2() {
    const [questions, setQuestions] = React.useState([{}]);

    const addQuestion = () => {
        setQuestions([...questions, {}]);
    };

    return (
        <div className='border-[#FFFFFF] border-2 rounded-lg bg-white shadow-md w-full p-3'>
            <div className=''>
                <p className='text-[13px] font-[600] text-[#616161]'>Training quiz</p>
                <p className='text-[11px] text-[#B4B4B4] '>Here you can manage the questions by clicking on the “Add Question” button and choose from the available types of question. You can add up to 100 questions.</p>
            </div>
            <hr className='my-3'/>
            <div className='flex flex-col gap-3'>
            {questions.map((question, index) => (
                <QuestionForm key={index} />
                ))}
            </div>
            {/* add question */}
            <div className=' rounded-[5px] mt-3'>
                <button onClick={addQuestion} className='bg-[#E1EFFF] text-[14px] text-[#2C8EFF] font-[700] leading-4  py-2 px-7 rounded-md w-full'>
                Add Question +
                </button>
            </div>
        </div>
    )
}

export default Section2