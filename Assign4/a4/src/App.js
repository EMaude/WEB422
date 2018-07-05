/*********************************************************************************
* WEB422 – Assignment 04
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of this
* assignment has been copied manually or electronically from any other source (including web sites) or
* distributed to other students.
*
* Name: Elliot Maude Student ID: 032830127 Date: 7/05/18
*
********************************************************************************/ 
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import Overview from './Views/Overview';
import Projects from './Views/Projects'
import Teams from './Views/Teams';
import Employees from './Views/Employees';
import NotFound from './Views/NotFound';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' render={() => (
          <Overview />
        )} />

        <Route exact path='/teams' render={() => (
          <Teams />
        )} />

        <Route exact path='/projects' render={() => (
          <Projects />
        )} />

        <Route exact path='/employees' render={() => (
          <Employees />
        )} />

        <Route  render={() => (
          <NotFound/>
        )} />
      </Switch>
    );
  }
}

export default App;