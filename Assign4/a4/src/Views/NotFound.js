import React, { Component } from 'react';

import Container from '../Container/Container';

class NotFound extends Component {
    render() {
        return (
            <Container>
                <h1 className="page-header">Not Found</h1>
                <span> Page Not Found </span>
            </Container>
        );
    }
}
export default NotFound;