
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
import moment from 'moment';
import Axios from 'axios';
moment().format();

class ProjectsPanel extends Component {

    constructor(props) {
        super(props);
        this.state = {projects: []};
    }

    componentDidMount() {
        Axios.get('http://localhost:8081/projects')
        .then(res => { 
            this.setState({projects: res.data});
        })
        .catch(function(err){
            console.log(err);
        });
    }

    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Projects</h3>
                </div>
                <div className="panel-body">
                    <div className="table-responsive overview-table">
                        <table className="table table-striped table-bordered">
                            <tbody>
                                {this.state.projects.map((element, index) => {
                                    return(
                                        <tr key={index}>
                                            <td>{element.ProjectName}</td>
                                            <td>Active for {moment().diff(element.ProjectStartDate, 'days')} days</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                    <a href="/projects" className="btn btn-primary form-control">View All Project Data</a>
                </div>
            </div>
        );
    };
}

export default ProjectsPanel;