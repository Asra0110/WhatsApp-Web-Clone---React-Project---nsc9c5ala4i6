import React from 'react';
import db,{ auth, googleProvider } from '../firebase';
import { useNavigate  } from 'react-router-dom';
import './Login.css';

function Login({setUser}) {

    const navigate = useNavigate()
    const singInWithGoogle = () =>{
        auth.signInWithPopup(googleProvider)
        .then((result) => {
            const newUser = {
                fullname: result.user.displayName,
                email: result.user.email,
                photoURL: result.user.photoURL,
            }
            navigate('/');
            setUser(newUser);

            localStorage.setItem('user' , JSON.stringify(newUser))

            db.collection('users').doc(result.user.email).set(newUser);
        })
        .catch((err) => alert(err.message));
    }

  return (
    <div className='login'>
        <div className='login-container'>
            <img className='login-logo' src='./WhatsappLogo.jpeg' alt=''/>
            <p className='login-name'>WhatsApp Web</p>
            <button className='login-btn' onClick={singInWithGoogle}>
                <img src='GoogleLogo.png' 
                alt='Login with google'/>
                Login With Google
            </button>
        </div>
    </div>
  )
}

export default Login;