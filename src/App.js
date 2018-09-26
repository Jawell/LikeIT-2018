import React, { Component } from 'react';
import './App.scss';
import Header from './default/Header';
import Content from "./default/Content";

class App extends Component
{
  render()
  {
    return (
        <div>
            <Header/>
            <Content/>
        </div>
    );
  }
}

export default App;
