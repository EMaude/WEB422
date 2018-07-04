import React, { Component } from 'react';

//import

import Nav from '../Nav/Nav';
import Sidebar from '../Sidebar/Sidebar';

class Container extends Component {
    render() {
        return (
            <div>
                <Nav />
                <div className="container-fluid">
                    <div className="row">
                        <Sidebar /> 
                        <div className=" col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default Container;