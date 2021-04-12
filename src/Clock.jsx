import React, { Component } from 'react';
import './App.css';


class Clock extends Component {
    constructor(props){
        super(props)
        this.state={date: new Date(),
        click:0
        };
    }

    // ComponentDidMount it it called after component is rendered for the first time 
componentDidMount(){
    this.timerID = setInterval(
        () => this.tick(),
        1000
    );
}
// componentWillunmount is used to end the process of rendering and data
componentWillUnmount(){
    clearInterval(this.timerID);
}

tick(){
    this.setState({
            date:new Date()
    });
}

Addmore=()=>{
    this.setState({click:this.state.click+1})
}


    render() { 
        return ( 
            <div className='Addmore'>
                <p>Time and Date in REACTJS</p>
                {/* <h5>The Current time is {new Date().toLocaleTimeString()} IST</h5> */}
                <p>{this.state.date.toLocaleDateString()}</p>
                <p>{this.state.date.toLocaleTimeString()}</p>
                <br/>
                
                <button onClick={this.Addmore}>ADD</button>
                <p>{this.state.click}</p>
                

            </div>
         );
    }
}

export default Clock;