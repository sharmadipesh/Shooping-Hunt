import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="header-style-container d-flex align-items-center">
                <div className="d-flex align-items-center">
                        <img alt="login" src="img/shop.svg" height="30px"/>
                        <div className="company-name">ShoppingHunt</div>
                </div>
            </div>

        );
    }
}

export default Header;