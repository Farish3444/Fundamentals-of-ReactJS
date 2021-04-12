import React, { useState } from 'react';
import './App.css';


function HookState(){

    // count variable represents the value of it ---> count first element 
// setCount is a variable which is used to declare a function in it.

    const [count, setCount] = useState(0);
    // console.log(setCount);
      

    function add(){
        setCount(count+2);
    }

    function minus(){
        setCount(count-1);
    }
   
    return(
    <div>
      <p>The Hook function process --- {count}</p>
      <button onClick={add}> Plus it</button>
      <button onClick={minus}> Minus </button>
      <button onClick={(e)=>{console.log(e)}}>Ok submit</button>
      <input onChange={(e)=>{console.log(e)}}/>
      <br/>
    </div>
    );
}




export default HookState;