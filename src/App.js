import { useState } from 'react';
import './App.css';

function App() {
  const [color,setColor] = useState('yellow')
  return (
    <div>
    <div className=' w-full h-screen' style={{backgroundColor:color}}>
    <div className=' flex justify-center '>
    <div className=' flex justify-center items-center gap-7 p-4 mt-4 rounded-lg bg-yellow-500 ' >
    <button className=' rounded-md bg-red-600 text-black p-5 font-bold text-2xl ' onClick={()=>{
      setColor('Red')
    }}>Red</button>
    
     <button className=' rounded-md bg-green-600 text-black p-5 font-bold text-2xl' onClick={()=>{
      setColor('green')}}>Green</button>
     <button className=' rounded-md bg-blue-600 text-black p-5 font-bold text-2xl'onClick={()=>{
      setColor('blue')}} >Blue</button>
    </div>
 
      



    </div>



    </div>
    
  
    </div>
  );
}

export default App;
