import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import './App.css';
import Clock from './Clock';


class Sample extends Component {
    constructor(){
        super()
        this.state={
        react:1,
        skill:false
        }
    }

bestLib=()=>{
    this.setState({react:this.state.react+1})
    // console.log('best react',this)
}

showMore=()=>{
    this.setState({skill:true})
}

showLess=()=>{
    this.setState({skill:false})
}


    render() { 
        return (  
            <div className='HE'>
           
            <button onClick={this.bestLib}>ADD</button>
            <div>number of times clicked----{this.state.react}</div>
            <br/>
            {
                this.state.skill ? (
                    <div>
                    <p>Programming is a Super power</p>
                    {
                        <button onClick={this.showLess}>Show Less</button>
                    }
                    </div>
                ) : (
                        <button onClick={this.showMore}>show more</button>
                    
                )
                
            }
            <p>The Parent for the Clock</p>
            {/* <Clock date={new Date()} /> */}


            </div>
        );
    }
}
 
export default Sample;