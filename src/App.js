import React, { Component } from 'react';
import './App.scss';
import Header from './modules/Header';
import About from './modules/About';
import DividerPoly from './modules/DividerPoly';
import Category from './modules/Category';

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
      </div>
    );
  }
}

export default App;
