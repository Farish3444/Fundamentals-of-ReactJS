// State is defined as the Storage of Data.

import React, { Component } from 'react';
import './card.css';
import { Button } from '@material-ui/core';





class State extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: 'Farish',
      initials: 'JS',
      info: [
        { title: 'ReactJS', text: 'User Interface' },
        { title: 'NodeJS', text: 'Backend' },
        { title: 'FireBase', text:'API' },
        {title:'Electron-JS',text:'Desktop'},
      ]
    }
  }

switchFullstack = (newSkills) =>{
  this.setState({
    info:[
      {title:'Flutter',text:"GoogleApp"},
      {title:"Docker",text:"Container"},
      {title:"ML",text:'Automation'},
      {title:newSkills,text:'Fluency'},
    ]
  })
}



  render() {
    return (
      <React.Fragment>
      <h1>State Function</h1>
        <section className="card-container">
          <header className="card-header">
            <span initials={this.state.initials}></span>
            <h2>{this.state.firstName}</h2>
          </header>

          <button onClick={()=>this.switchFullstack('Communication')}>New Skills</button>

          <main>
            <ul>
              <li>
                <span>{this.state.info[0].title}</span>
                {this.state.info[0].text}
              </li>
              <li>
                <span>{this.state.info[1].title}</span>
                {this.state.info[1].text}
              </li>
              <li>
                <span>{this.state.info[2].title}</span>
                {this.state.info[2].text}
              </li>
            </ul>
            <ul>
              <li>
                <span>{this.state.info[3].title}</span>
                {this.state.info[3].text}
              </li>
            </ul>
          </main>
        </section>
        {/* <Button variant="contained" onClick={alert('Material-UI Button')}>Enter</Button> */}
      </React.Fragment>
    );
  }
}
export default State;
