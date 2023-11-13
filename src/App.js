import './App.css';
import HeaderSection from './components/header/header-section';
import TrainingSection from './components/trainingSection';

function App() {
  return (
    <div className=" flex flex-col justify-center items-center  h-full  w-full  ">
      <HeaderSection/>
      <div className=' px-2 w-full sm:w-full h-full flex justify-center items-center    '>
        <TrainingSection/>
      </div>
    </div>
  );
}

export default App;
