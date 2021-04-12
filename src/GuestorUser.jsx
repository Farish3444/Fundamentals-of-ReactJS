//    The Conditional Rendering in JSX with a tentary Operator
import React, { Component } from 'react';
// import logo from './logo.svg';


class GuestorUser extends Component {
    state = { 
        isLogged:true
     }
    render() {
        // if (this.state.isLogged=false){
        //     return <div>Welcome to Programmers World</div>
        // }
        // else{
        //     return <div>Welcome Guests</div>
        // }




        return (
            <div>
            {/* TENTARY OPERATOR */}
               {(this.state.isLogged)? (<h2 style={{color:'red'}}>Welcome Coder</h2>) : (<h2 style={{color:'green'}}> Welcome Guests</h2>)}
            </div>
        );
    }
}
 
export default GuestorUser;