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

import Container from '../Container/Container';

class Teams extends Component {

    constructor(props) {
        super(props);
        this.state = { teams: [] };
    }

    componentDidMount() {
        Axios.get('https://polar-mountain-95409.herokuapp.com/teams-raw')
            .then((res) => {
                this.setState({ teams: res.data });

            })
            .catch(function (err) {
            })
            .finally(() => {
                this.projects();
                this.TeamLead();
            });
    }

    projects() {
        let TeamData = this.state.teams;
        Axios.get('https://polar-mountain-95409.herokuapp.com/Projects')
            .then(res => {
                TeamData.forEach((element, index, array) => {
                    for (let i = 0; i < res.data.length; i++) {
                        for (let j = 0; j < element.Projects.length; j++) {
                            if (res.data[i]._id === element.Projects[j]) {
                                array[index].Projects[j] = res.data[i].ProjectName
                            }
                        }
                    }
                })
                this.setState({ teams: TeamData });
            })
            .catch(function (err) {
                console.log(err);
            });
    }

    TeamLead() {
        let TeamData = this.state.teams;
        Axios.get('https://polar-mountain-95409.herokuapp.com/Employees')
            .then(res => {
                TeamData.forEach((element, index, array) => {
                    for (let i = 0; i < res.data.length; i++) {
                            if (res.data[i]._id === element.TeamLead) {
                                array[index].TeamLead = (res.data[i].FirstName + " " + res.data[i].LastName);
                            }
                    }
                })
                this.setState({ teams: TeamData });
            })
            .catch(function (err) {
                console.log(err);
            });
    }

    render() {
        return (
            <Container sidebar="Teams">
                <h1 className="page-header">Teams</h1>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Projects</th>
                            <th>Employees</th>
                            <th>Team Lead</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.teams.map((element, index) => {
                            return (
                                <tr key={index}>
                                    <td>{element.TeamName}</td>
                                    <td><ul>{element.Projects.map((el, i) => {
                                        return (
                                            <li key={i}>{el}</li>
                                        )
                                    })}</ul></td>
                                    <td>{element.Employees.length}</td>
                                    <td>{element.TeamLead}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </Container >
        );
    }
}

export default Teams;