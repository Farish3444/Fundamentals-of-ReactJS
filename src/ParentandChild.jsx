import React, { Component } from 'react';

function NestChild(){
    return(
        <div>
            <p style={{color:'lightblue',position:'relative',right:'-25%'}}>Nested Child</p>
        </div>
    );
}

class PC extends Component {    
    render() { 
        return (  
            <React.Fragment>
                <h2>The Parent</h2>
                <Child/>
            </React.Fragment>
        );
    }
}

function Child(){
    return(
        <div>
            <h3> The Child for the parent</h3>
            <NestChild/>
        </div>
    );
}


 
export default PC;