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
import Axios from 'axios';
import {Link} from 'react-router-dom'

class TeamsPanel extends Component {

    constructor(props) {
        super(props);
        this.state = {teams: []};
    }

    componentDidMount() {
        Axios.get('https://polar-mountain-95409.herokuapp.com/teams-raw')
        .then(res => { 
            this.setState({teams: res.data});
        })
        .catch(function(err){
            console.log(err);
        });
    }

    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Teams</h3>
                </div>
                <div className="panel-body">
                    <div className="table-responsive overview-table">
                        <table className="table table-striped table-bordered">
                            <tbody>
                                {this.state.teams.map((element, index) => {
                                    return(
                                        <tr key={index}>
                                            <td>{element.TeamName}</td>
                                            <td> {element.Employees.length} Employees</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                    <Link to ="/teams" className="btn btn-primary form-control">View All Team Data</Link>
                </div>
            </div>
        );
    };
}

export default TeamsPanel;