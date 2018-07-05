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

class Sidebar extends Component {
    render() {
        return (
            <div className="col-sm-3 col-md-2  sidebar">
              <ul className="nav nav-sidebar">
                <li className={(this.props.sidebar === "Overview")? "active" : "inactive"}><a href="/">Overview <span className="sr-only">(current)</span></a></li>
              </ul>
              <ul className="nav nav-sidebar">
                <li className={(this.props.sidebar === "Projects")? "active" : "inactive"}><a href="/projects">Projects</a></li>
                <li className={(this.props.sidebar === "Teams")? "active" : "inactive"}><a href="/teams">Teams</a></li>
                <li className={(this.props.sidebar === "Employees")? "active" : "inactive"}><a href="/employees">Employees</a></li>
              </ul>
            </div>
        );
    };
}

export default Sidebar;