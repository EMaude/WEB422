import React, { Component } from 'react';

class Sidebar extends Component {
    render() {
        return (
            <div className="col-sm-3 col-md-2  sidebar">
              <ul className="nav nav-sidebar">
                <li className={(this.props.sidebar === "Overview")? "active" : "inactive"}><a href="/">Overview <span className="sr-only">(current)</span></a></li>
              </ul>
              <ul className="nav nav-sidebar">
                <li className={(this.props.sidebar === "Projects")? "active" : "inactive"}><a href="/projects">Projects</a></li>
                <li className={(this.props.sidebar === "Teams")? "active" : "inactive"}><a href="/teams">Teams</a></li>
                <li className={(this.props.sidebar === "Employees")? "active" : "inactive"}><a href="/employees">Employees</a></li>
              </ul>
            </div>
        );
    };
}

export default Sidebar;