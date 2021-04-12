import React, { Component } from 'react';


class State2 extends Component {
    constructor(){
         super()
         this.state = { 
        name:'Farish',
        prof:'Developer',
        salary:'15LPA',
        hobby:'Side hustling',
        count:0,
        info:false,
        result:'fail'
     }
     console.log('Comp',this)
     this.ReadMore= this.ReadMore.bind(this)
}

ReadMore=()=>{
    this.setState({info:true})
}

ReadLess=()=>{
    this.setState({info:false})
}


    render() { 
        return (
            <div>
                <p>{this.state.name} is a Senior Developer and a part time Entreprenuer</p>
                <p>His Current Salary is {this.state.salary}</p>
                <p>his hobbies are {this.state.hobby}</p>
                <span>{console.log(this.handleIncrement)}</span>
                {
                   this.state.info ? (
                       <div>
                       <p>Lets react it </p>{
                           <button onClick={this.ReadLess}>Show Less</button>
                       }
                       </div>):(
                           <button onClick={this.ReadMore}>
                       Read more
                   </button>
                   )
                }
            </div>
         );
    }
}

export default State2;




