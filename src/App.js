import React from 'react';
import './App.css';
const MainLazy = React.lazy(()=>import('./pages/mainPage'));

function App() {

  const [data, setData] = React.useState([]);
  
  React.useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await fetch("/data.json"); // Change the URL to point to the root
        const data = await res.json();
        setData(data);
        
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  fetchItems();
  }, []);

  return (
      <React.Suspense fallback={<div>Loading...</div>}>
        <MainLazy data={data}/>
      </React.Suspense>
  );
}

export default App;
