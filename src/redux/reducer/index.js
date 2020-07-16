import { combineReducers } from 'redux';
import Auth from 'redux/reducer/Auth';
import ProductOperation from 'redux/reducer/ProductOperation';


const appReducer = combineReducers({
    Auth,
    ProductOperation
});

const rootReducer = (state, action) => {
	return appReducer(state, action);
};

export default rootReducer;
