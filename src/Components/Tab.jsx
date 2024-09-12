import React, { useState } from "react";

export default function Tab() {
    const array = [1,2,3,4];
    const [numbers, setNumbers] = useState(array);
    const handleNumber = () =>{
        setNumbers([...numbers,parseInt(Math.random()*10)]);
    };
 
  return (
    <div>
    <h1>array:{numbers.toString()}</h1>
    <button onClick={handleNumber}>random</button>
    </div>
  );
}
