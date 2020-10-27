import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import {auth, provider} from './firebase'
import {useStateValue} from './StateProvider'
import { actionTypes } from './reducer'
function Login() {
    const [{user}, dispatch]=useStateValue()

    const signIn = ()=>{
        auth.signInWithPopup(provider)
            .then(result=> {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            })
            .catch(error=> alert(error.message))
        };
    return (
        <div className="login">
            <div className="login__container">
                <img 
                    src="http://pngimg.com/uploads/whatsapp/whatsapp_PNG20.png" 
                    alt="whatspp logo"
                />

                <div className="login__text">
                    <h1>Sign in to whatsApp</h1>
                </div>

                <Button onClick={signIn}>
                    Sign In With Google
                </Button>
            </div>
        </div>
    )
}

export default Login
