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
import ProjectsPanel from '../Panels/ProjectsPanel';
import TeamsPanel from '../Panels/TeamsPanel';
import EmployeesPanel from '../Panels/EmployeesPanel';

class Overview extends Component {
    render() {
        return (
            <Container sidebar="Overview">
                <h1 className="page-header">Overview</h1>
                <div className="row">
                    <div className="col-md-4">
                        <ProjectsPanel />
                    </div>
                    <div className="col-md-4">
                        <TeamsPanel />
                    </div>
                    <div className="col-md-4">
                        <EmployeesPanel />
                    </div>
                </div>
            </Container>
        )
    };
}
export default Overview;