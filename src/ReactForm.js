// import React, { Component } from 'react';
import React, { useState } from 'react';
import './App.css';

function ReactForm(){


    const [Name, setName] = useState(" ");
    const [headingText, setheadingText] = useState();
    

    function handleChange(e){
        
        console.log(e.target.value)
        setName(e.target.value)
    }

    function handleClick(e){
    setheadingText(Name)
    e.preventDefault();
    }

    
    return(
        <div className='ReactForm'>

         <h3 style={{backgroundColor:'blueviolet'}}>React Form JS Practiced by - Mr. {Name}</h3>
         
        <form onSubmit={handleClick}>
         <input onChange={handleChange} type='text' placeholder='Enter the name' value={Name}/>
         <button type="submit" style={{color:'red'}}>Submit</button>
         </form>
         <p>Successfully submitted {headingText}</p>

         </div>
    );
}




export default ReactForm;