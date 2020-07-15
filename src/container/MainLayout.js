import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';
import {Routes} from 'config/Routes';
// import Header from 'views/Header';
import {reduxSetup} from 'redux/actions/Auth';
import {connect} from 'react-redux';


class MainLayout extends Component {
    
    componentDidMount = () =>{
        this.props.reduxSetup();
    }

    render() {
        
        return (
            <div>
                {/* <Header {...this.props}/> */}
                {/* <Switch>
                    <Route exact component={()=><Home tableData={this.props.tableData}/>} path={Routes.Home}/>
                </Switch> */}
                {/* Main Layout */}
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