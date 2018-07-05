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

class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container-fluid">
            <div className="navbar-header">
                <a className="navbar-brand" href="/">WEB422 - Project Portal</a>
            </div>
            </div>
            </nav>
        );
    };
}

export default Nav;