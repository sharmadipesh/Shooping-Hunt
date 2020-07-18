import React from 'react';
import {Routes} from 'config/Routes';
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainLayout from 'container/MainLayout';
import 'styles/index.scss';
import logger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from 'redux/reducer'
import Login from 'views/Login';
import Signup from 'views/Signup';
import {axiosAuthMiddleware} from 'middlware/axios-middleware';


const createStoreWithMiddleware = applyMiddleware(
  reduxThunk,
  logger,
  axiosAuthMiddleware
)(createStore);

const store = createStoreWithMiddleware(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

let token = sessionStorage.getItem("token");
if(token){
  store.dispatch({
    type:"TOKEN",
    payload:token
  })
} 

class App extends React.Component {
  componentDidMount =() =>{
    let token = sessionStorage.getItem("token");
    console.log("hddhjhdjhjd ",token);
    if(token){
      store.dispatch({
        type:"TOKEN",
        payload:token
      })
    } 
  }
  render(){
    return (
      <div className="App">
        <Provider store={store}>
            <Router>
                <Route exact component={Login} path={Routes.Landingpage}/>
                <Route exact component={Login} path={Routes.Login}/>
                <Route  component={Signup} path={Routes.Signup}/>
                <Route  component={MainLayout} path={Routes.Dashboard}/>
            </Router>
          </Provider>
      </div>
    );
  }
}

export default App;
