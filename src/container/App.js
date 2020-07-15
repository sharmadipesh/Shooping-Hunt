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


const createStoreWithMiddleware = applyMiddleware(
  reduxThunk,
  logger
)(createStore);

const store = createStoreWithMiddleware(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
          <Router>
              <Route exact component={MainLayout} path={Routes.Landingpage}/>
          </Router>
        </Provider>
    </div>
  );
}

export default App;
