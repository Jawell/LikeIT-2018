import React, { Component } from 'react';
import './App.scss';
import Header from './modules/Header';
import About from './modules/About';
import DividerPoly from './modules/DividerPoly';
import Category from './modules/Category';
import DividerStraight from './modules/DividerStraight';
import Organizers from './modules/Organizers';
import Partners from './modules/Partners';

class App extends Component
{
  render()
  {
    return (
      <div>
        <Header/>
        <About/>
        <DividerPoly/>
        <Category/>
        <DividerStraight/>
        <Organizers/>
        <Partners/>
      </div>
    );
  }
}

export default App;
