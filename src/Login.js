import { Button } from '@material-ui/core';
import React from 'react';
import "./login.css";
import {auth,provider} from "./firebase";
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {
    const [state,dispatch] = useStateValue();
    const signIn = () => {
        auth.signInWithPopup(provider)
        .then((result) => {
            
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
        })
        .catch((error) => alert(error.message));
    };
    return (
        <div className='login'>
            <div className="login__logo">
         <img src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo.png"></img>   
         <img src="https://image.cnbcfm.com/api/v1/image/106222236-1572885897732facebook_wordmark.gif?v=1572886170&w=740&h=416"></img>
        </div>
        <Button className="button" type="submit" onClick = {signIn}>
            Sign In
        </Button>
        </div>
    )
}

export default Login
