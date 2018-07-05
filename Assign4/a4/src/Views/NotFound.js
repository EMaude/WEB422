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

import Container from '../Container/Container';

class NotFound extends Component {
    render() {
        return (
            <Container>
                <h1 className="page-header">Not Found</h1>
                <span> Page Not Found </span>
            </Container>
        );
    }
}
export default NotFound;