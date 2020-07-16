import {ADD_PRODUCT_IN_CART} from 'redux/Types';

const initial_state={
    productCart:[]
}

export default (state=initial_state,action)=>{
    switch(action.type){
        case ADD_PRODUCT_IN_CART: return{
            ...state,
            productCart:action.payload
        };
        default:
			return state;
    }
}