import {REDUX_SETUP} from 'redux/Types'
import {axiosNoAuth} from 'config/axios-instances';

export function reduxSetup(successCallBack,errorCallBack){
    return async function(dispatch){
        try{
            await dispatch({
                type:REDUX_SETUP,
                payload:true
            })
            successCallBack && successCallBack()
        }catch(e){
            console.log(e);
            errorCallBack && errorCallBack(e);
        }
    }
}

