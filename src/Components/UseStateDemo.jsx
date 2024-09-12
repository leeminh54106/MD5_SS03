import React, { useState } from 'react'

export default function UseStateDemo() {
  const [count, setCount] = useState(0);
  const arr = [1,2,3,4,5];
  const [list,setList] = useState(arr);

  const handleRandom = () =>{
    //them 1 gia tri vao list
    setList([...list,parseInt(Math.random()*10)]);

    //khoi tao obj
   
  }
   const [objState,setObjState] = useState({count:0,list:arr});

    //random
    const handleRandomObject = () =>{
      
      setObjState({
        count: objState.count,
        list:[...objState.list,Math.floor(Math.random()*10)]
      })
    };
  return (
    <>
      <h2>demo</h2>
      <p>Current value:{count}</p>
      <button onClick={() => setCount(count+1)}>up</button>
      <button onClick={()=> setCount(count-1)}>down</button>

      <p>Current array:{list.toString()}</p>
      <button onClick={handleRandom}>random</button>


      <h2>demooooooooooooo</h2>
      <p>Current value:{objState.count}</p>
      <button onClick={()=> setObjState({count: objState.count +1, list:objState.list})}>up</button>
      <button onClick={()=> setObjState({count: objState.count -1, list:objState.list})}>down</button>

      <p>Current array:{objState.list.toString()}</p>
      <button onClick={handleRandomObject}>random</button>
    </>
  )
}
