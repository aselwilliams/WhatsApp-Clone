import React from 'react';
import './Login.css';
import Button from '@mui/material/Button';
import {auth, provider} from './firebase';
// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';


function Login() {
const [{}, dispatch] = useStateValue();

    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then((result) => {
          console.log(result.user);
          dispatch({
            type: actionTypes.SET_USER,
            user: result.user,
          });
          dispatch({
            type: actionTypes.SET_SESSION,
            uid: result.user.uid,
            displayName: result.user.displayName,
            photoURL: result.user.photoURL,
          });
        })
        // const auth = getAuth();
        // signInWithPopup(auth, provider)
        // .then(res=>{dispatch({
        //     type: actionTypes.SET_USER,
        //     user:res.user,
        // })})
        .catch(error=>alert(error.message))
    }
  return (
    <div className='login'>
        <div className='login__container'>
        <img src='https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c543.png' alt='logo' />
        <div className='login__text'>
            <h1>Sign in to WhatsApp</h1>
        </div>
        <Button onClick={signIn}>
            Sign In With Google
        </Button>
        </div>
        </div>
  )
}

export default Login