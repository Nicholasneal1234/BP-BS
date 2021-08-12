import React from 'react';
import { au } from './firebase';

export const AuthState = React.createContext();

function Auth(props){

    const [login, setLogin]=React.useState(false);
    const [uid, setUid]=React.useState();

    React.useEffect(()=>{
        au.onAuthStateChanged((user)=>{
            user?localStorage.setItem("login",true):localStorage.setItem("login",false);
            user?setLogin(true):setLogin(false);
            user?setUid(user.uid):console.log("user isn't login")
        })
    },[])

    const value = {
        login:login,
        uid:uid
    }

    return(
        <AuthState.Provider value={value}>
            {props.children}
        </AuthState.Provider>
    )
}

export default Auth;