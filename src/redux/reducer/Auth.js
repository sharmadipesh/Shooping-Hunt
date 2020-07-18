import {REDUX_SETUP,USER_REGISTRATION,TOKEN} from 'redux/Types';

const initial_state={
    redux_setup:false,
    user_information:{},
    token:null
}

export default (state=initial_state,action)=>{
    switch(action.type){
        case TOKEN: return{
            ...state,
            token:action.payload
        };
        case REDUX_SETUP: return{
            ...state,
            redux_setup:action.payload
        };
        case USER_REGISTRATION: return{
            ...state,
            user_information:action.payload
        };
        default:
			return state;
    }
}