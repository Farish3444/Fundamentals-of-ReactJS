import './App.css';
// import React, { Component } from 'react';
import PC from './ParentandChild';
import MyProp from './MyProp';
import AppProps from './AppProps';
import State from './State';
import State2 from './State&lifecycle';
import Login from './LoginForm';
import Sample from './HandlingEvent';
import Clock from './Clock';
import HookState from './HookState';
import Practice from './practiceFile';
import Hooktimer from './HookTimer'
import GuestorUser from './GuestorUser';
import CR_control from './ConditionalRendering';
import ReactForm from './ReactForm';
import ShoppingList from './ShoppingList';



function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>APP-JS</h1>
       <PC/>

       <MyProp name="Farish React developer" salary="15LPA"/>
       <AppProps/>
    
       <State/>
       <State2/>
      <Login />
      <Sample/>
      <Clock/>
      <HookState/>
      <Hooktimer/>
      <GuestorUser/>
      <CR_control/>
      <ReactForm />
      <Practice/>
      <ShoppingList/>
      </header>
      
    </div>
  );
}

export default App;
