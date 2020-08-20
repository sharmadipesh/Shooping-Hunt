import React, { Component } from 'react';
import {connect} from 'react-redux';
import idx from "idx";
import {logoutHandler} from 'redux/actions/Auth';

class Header extends Component {

    logoutOperation = () =>{
        let token = sessionStorage.getItem("token");
        let data = {
            AUTH_TOKEN:token
        }
        this.props.logoutHandler(data);
    }

    render() {
        return (
            <div className="header-style-container d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                        <img alt="login" src="/img/shop.svg" height="30px"/>
                        <div className="company-name">ShoppingHunt</div>
                </div>
                <div className="d-flex align-items-center">
                    <div className="shooping-cart mr-10" onClick={()=>this.props.history.push("/shooping/cart")}>
                        <img alt="shopping-cart" src="/img/supermarket.svg"/>
                        {idx(this.props.productCart,_=>_.length)?
                        <div className="alert-container">
                            {idx(this.props.productCart,_=>_.length)}
                        </div>
                        :null}
                    </div>
                    <div className="shooping-cart" onClick={this.logoutOperation}>
                        <img alt="logout-icon" src="/img/logout.svg"/>
                    </div>
                </div>
            </div>

        );
    }
}

// export default Header;
function mapStateToProps(state){
    return{
        productCart:state.ProductOperation.productCart
    }
}
export default connect(mapStateToProps,{
    logoutHandler
})(Header);