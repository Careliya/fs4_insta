import React, { Component } from 'react';
import './Header.css';
import logo from './logo.jpg'

class Header extends Component {
    render() {
        return (
                <header>
                    <img src={logo} alt="" className="logo"/>
                </header>
        )
    }
}

export default Header;
