import React, { Component } from 'react';
import './App.css';

class Login extends Component {
    render() { 
        return (  
            <div>
                <h1>LOGIN FORM IN REACT</h1>
                <form>
                    <div className='form-group'>
                        <label htmlFor="username">Username</label>
                        <input id='username' type='text' className='form-control'/>
                    </div>
                    <div className='form-group'>
                    <label htmlFor='0as'>Password</label>
                    <input id="Password" type="text" className="form-control"/>
                    </div>
                </form>
<br/>
                
            </div>
        );
    }
}
 
export default Login;