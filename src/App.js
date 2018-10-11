import React, { Component } from 'react';
import './App.scss';

import Header from './modules/Header';
import About from './modules/About';
import DividerPoly from './modules/DividerPoly';
import Category from './modules/Category';
import DividerStraight from './modules/DividerStraight';
import Organizers from './modules/Organizers';
import Partners from './modules/Partners';
import Chance from './modules/Chance';
import Contacts from './modules/Contacts';
import Footer from './modules/Footer';

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
        <Chance/>
        <Contacts/>
        <Footer/>
      </div>
    );
  }
}

export default App;
