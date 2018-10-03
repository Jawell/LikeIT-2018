import React, { Component } from 'react';
import './App.scss';
import Header from './modules/header';
import About from './modules/about';

class App extends Component
{
  render()
  {
    return (
      <div>
        <Header/>
        <About/>
      </div>
    );
  }
}

export default App;
