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

//import

import Nav from '../Nav/Nav';
import Sidebar from '../Sidebar/Sidebar';

class Container extends Component {
    render() {
        return (
            <div>
                <Nav />
                <div className="container-fluid">
                    <div className="row">
                        <Sidebar sidebar={this.props.sidebar}/> 
                        <div className=" col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default Container;
