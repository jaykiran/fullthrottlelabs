import React, { Component } from 'react';
import {Table} from 'react-bootstrap';

class dataContainer extends Component {
    render() {
        return (
            <div className="container">
                <Table striped bordered hover variant="dark">
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Location</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>W012A3CDE</td>
                        <td>Egon Spengler</td>
                        <td>America/Los_Angeles</td>
                    </tr>
                    <tr>
                        <td>W07QCRPA4</td>
                        <td>Glinda Southgood</td>
                        <td>Asia/Kolkata</td>
                    </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default dataContainer;