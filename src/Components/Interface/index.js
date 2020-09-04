import React, { Component } from 'react';
import './style.css';
import logo from '../../logo-2.png';
import {Button} from 'react-bootstrap';


class HeaderSection extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <div className="navbar navbar-expand-lg-navbar-dark">
                        <i className="navbar-brand">
                            <img src={logo} className="App-logo" alt="logo" />
                        </i>
                        <ul className="navbar-nav">
                            <li className="social">
                                {/*<Button className="btn btn-success" href="https://github.com/jaykiran/fullthrottlelabs">github repo</Button>*/}
                                <i className="fa fa-github" href='https://github.com/jaykiran/fullthrottlelabs' />
                            </li>
                        </ul>
                    </div>
                    <div className="title">
                        <h1>Hiring Assignment</h1>
                    </div>
                </div>
                <div className="data-container">
                    <Button className="btn btn-success" onKeyPress={()=>alert("hi")} >Get UserData</Button>
                </div>
            </div>
        );
    }
}

export default HeaderSection;