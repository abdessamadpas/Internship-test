import './App.css';
import HeaderSection from './components/header/header-section';
import TrainingSection from './components/trainingSection';

function App() {
  return (
    <div className="h-screen w-full  bg-[#F8FAFD] ">
      <HeaderSection/>
      <div className=' px-2 w-full  sm:w-full h-full  '>
        <TrainingSection/>
      </div>
    </div>
  );
}

export default App;
