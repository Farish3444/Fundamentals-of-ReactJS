import React from 'react'
import { Component } from 'react';

class CR_control extends Component {
   constructor(props) {
       super(props)
       this.handleLoginClick = this.handleLoginClick.bind(this)
       this.handleLogoutClick = this.handleLogoutClick.bind(this)
       this.state={LoggedIn:false};
   }

   handleLoginClick(){
       this.setState({LoggedIn:true})
   }

   handleLogoutClick(){
       this.setState({LoggedIn:false})
   }


    render() { 
        const LoggedIn = this.state.LoggedIn;
        let button;
        if (LoggedIn){
            button= <LoginButton onClick={this.handleLoginClick}/>;
        }
        else{
            button= <LogoutButton onClick={this.handleLogoutClick}/>;
        }

        return ( 
            <div>
               <p>{LoggedIn}</p>
               {button}
            </div>
         );
    }
}

function LoginButton(props){
    return(
        <button onClick={props.onClick}>LogIn</button>
    );

}

function LogoutButton(props){
    return(
        <button onClick={props.onClick}>LogOut</button>
    );
}
 
export default CR_control;