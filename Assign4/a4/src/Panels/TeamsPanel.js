import React, { Component } from 'react';
import Axios from 'axios';

class TeamsPanel extends Component {

    constructor(props) {
        super(props);
        this.state = {teams: []};
    }

    componentDidMount() {
        Axios.get('http://localhost:8081/teams-raw')
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
                    <a href="/projects" className="btn btn-primary form-control">View All Project Data</a>
                </div>
            </div>
        );
    };
}

export default TeamsPanel;