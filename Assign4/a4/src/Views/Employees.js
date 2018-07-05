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
import moment from 'moment';
import Container from '../Container/Container';

class Employees extends Component {

    constructor(props) {
        super(props);
        this.state = {employees: [] };
    }

    componentDidMount() {
        Axios.get('https://polar-mountain-95409.herokuapp.com/employees')
            .then(res => {
                this.setState({employees: res.data});
            })
            .catch(function (err) {
                console.log(err);
            });
    }

    render() {
        return (
            <Container sidebar="Employees">
                <h1 className="page-header">Employees</h1>
                <table className="table table-striped table-bordered">
                <thead>
                        <tr>
                            <th>Name & Position</th>
                            <th>Address</th>
                            <th>Phone Num</th>
                            <th>Hire Date</th>
                            <th>Salary Bonus</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.employees.map((element, index) => {
                            return (
                                <tr key={index}>
                                    <td>{element.FirstName} {element.LastName} - {element.Position.PositionName}</td>
                                    <td>{element.AddressStreet} {element.AddressCity}, {element.AddressState}, {element.AddressZip} </td>
                                    <td>{element.PhoneNum} Ext. {element.Extension}</td>
                                    <td>{moment(element.HireDate, moment.ISO_8601).format("LL")}</td>
                                    <td>{element.SalaryBonus}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </Container >
      );
    }
}

export default Employees;