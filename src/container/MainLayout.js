import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';
import {Routes} from 'config/Routes';
import Header from 'views/components/Header';
import {reduxSetup} from 'redux/actions/Auth';
import {connect} from 'react-redux';
import Dashboard from 'views/Dashboard';
import Cart from 'views/Cart';


class MainLayout extends Component {
    
    componentDidMount = () =>{
        this.props.reduxSetup();
    }

    render() {
        
        return (
            <div>
                <Header {...this.props}/>
                <div className="mt-75">
                    <Switch>
                        <Route exact component={()=><Dashboard {...this.props}/>} path={Routes.MainLayout}/>
                        <Route exact component={Cart} path={Routes.Cart}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

// export default MainLayout;

function mapStateToProps(state){
    return{
    }
}

export default connect(mapStateToProps,{
    reduxSetup,
})(MainLayout);