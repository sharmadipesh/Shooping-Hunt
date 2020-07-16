import {ADD_PRODUCT_IN_CART} from 'redux/Types'

export function productAddToCart(data,successCallBack,errorCallBack){
    return async function(dispatch){
        try{
            await dispatch({
                type:ADD_PRODUCT_IN_CART,
                payload:data
            })
            successCallBack && successCallBack()
        }catch(e){
            console.log(e);
            errorCallBack && errorCallBack(e);
        }
    }
}

