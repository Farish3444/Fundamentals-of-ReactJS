// import React from 'react'
import  { useState } from 'react';
import React, { Component } from 'react'
import './App.css';


class Practice extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            count:'shopped items click to view total',
            mac:20,
            windows:10
             
        }
    }

    Add=()=>{
        this.setState({count:this.state.mac + this.state.windows})
    }

    
    render(){
        


        return (
            <div>

            <p>{this.state.count}</p>
            <button onClick={this.Add}>total</button>


            </div>
        );
    }
}
 
export default Practice;

