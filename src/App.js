import React, { Component } from 'react';
import './App.scss';
import Header from './modules/Header';
import About from './modules/About';
import DividerDesktop from './modules/DividerDesktop';

class App extends Component
{
  render()
  {
    return (
      <div>
        <Header/>
        <About/>
        <DividerDesktop/>
      </div>
    );
  }
}

export default App;
