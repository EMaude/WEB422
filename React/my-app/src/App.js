import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './navbar';
import Panel from './Panel';


class App extends Component {
  render() {
    return (
      <div>
        <Navbar title="React Practice"/>

        <div className="container">
          <div className="row">

            <div className="col-md-6">

              <Panel title="Panel 1">
                Panel Content  
              </Panel>

            </div>
            <div className="col-md-6">

             <Panel title="Panel 2">
                Panel Content  
              </Panel>

            </div>

          </div>
        </div>

      </div>
    );
  }
}

export default App;
