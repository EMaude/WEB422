import React, { Component } from 'react';
import Axios from 'axios';

class EmployeesPanel extends Component {

    constructor(props) {
        super(props);
        this.state = {employees: []};
    }

    componentDidMount() {
        Axios.get('http://localhost:8081/employees')
        .then(res => { 
            this.setState({employees: res.data});
        })
        .catch(function(err){
            console.log(err);
        });
    }

    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Employees</h3>
                </div>
                <div className="panel-body">
                    <div className="table-responsive overview-table">
                        <table className="table table-striped table-bordered">
                            <tbody>
                                {this.state.employees.map((element, index) => {
                                    return(
                                        <tr key={index}>
                                            <td>{element.FirstName} {element.LastName}</td>
                                            <td> {element.Position.PositionName}</td>
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

export default EmployeesPanel;