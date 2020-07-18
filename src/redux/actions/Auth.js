import {REDUX_SETUP,USER_REGISTRATION,TOKEN} from 'redux/Types'
import {axiosNoAuth,axiosAuth} from 'config/axios-instances';

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
export function signUpHandler(data,successCallBack,errorCallBack){
    return async function(dispatch){
        try{
            let response = await axiosAuth.post(`https://dev-api.alldaydr.com/api/users/sign_up.json`,data);
            console.log("44444444 ",response)
            if(response.data.status === 200){
                await dispatch({
                    type:USER_REGISTRATION,
                    payload:response.data.data.user
                })
                await dispatch({
                    type:TOKEN,
                    payload:response.data.data.user.auth_token
                })
                sessionStorage.setItem("token", response.data.data.user.auth_token);
                successCallBack && successCallBack(response.data)
            }
        }catch(e){
            console.log(e);
            errorCallBack && errorCallBack(e);
        }
    }
}

export function loginHandler(data,successCallBack,errorCallBack){
    return async function(dispatch){
        try{
            let response = await axiosNoAuth.post(`https://dev-api.alldaydr.com/api/users/sign_in.json`,data);
            console.log("######## ",response)
            await sessionStorage.clear();
            if(response.data.status === 200){
                await dispatch({
                    type:USER_REGISTRATION,
                    payload:response.data.data.user
                })
                await dispatch({
                    type:TOKEN,
                    payload:response.data.data.user.auth_token
                })
                sessionStorage.setItem("token", response.data.data.user.auth_token);
                successCallBack && successCallBack(response.data)
            }
        }catch(e){
            console.log(e);
            errorCallBack && errorCallBack(e);
        }
    }
}


export function logoutHandler(data,successCallBack,errorCallBack){
    return async function(dispatch){
        try{
            let response = await axiosAuth.delete(`https://dev-api.alldaydr.com/api/users/sign_out.json`,data);
            console.log("Logout Handler ",response);
            if(response.data.status === 200){
                await sessionStorage.clear();
                successCallBack && successCallBack(response.data)
            }
        }catch(e){
            console.log(e);
            errorCallBack && errorCallBack(e);
        }
    }
}
