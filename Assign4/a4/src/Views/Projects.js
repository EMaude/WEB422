import React, { Component } from 'react';
import moment from 'moment';
import Axios from 'axios';

import Container from '../Container/Container';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { projects: [] };
    }

    componentDidMount() {
        Axios.get('http://localhost:8081/projects')
            .then(res => {
                this.setState({ projects: res.data });
            })
            .catch(function (err) {
                console.log(err);
            });
    }

    render() {
        return (
            <Container sidebar="Projects">
                <h1 className="page-header">Projects</h1>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.projects.map((element, index) => {
                            return (
                                <tr key={index}>
                                    <td>{element.ProjectName}</td>
                                    <td>{element.ProjectDescription}</td>
                                    <td>{moment(element.ProjectStartDate, moment.ISO_8601).format("LL")}</td>
                                    <td>{element.ProjectEndDate ? moment(element.ProjectEndDate, moment.ISO_8601).format("LL") : "N/A"}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </Container>
        );
    }
}

export default Projects;