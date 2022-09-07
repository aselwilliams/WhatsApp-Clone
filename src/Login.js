import React from 'react';
import './Login.css';
import Button from '@mui/material/Button';
import {auth, provider} from './firebase';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


function Login() {
    const signIn = () => {
        const auth = getAuth();
        signInWithPopup(auth, provider).then(res=>console.log(res)).catch(error=>alert(error.message))
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