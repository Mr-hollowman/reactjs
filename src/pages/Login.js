import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function Login({ setUser }) {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                navigate("/products/Latest")
                console.log(user);
                setUser(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage)
                console.log(errorCode, errorMessage)
            });
    }
    return (
        <div className='login-container'>
            <form className='auth-form' onSubmit={handleSubmit}>
                <h2>Login</h2>
                <label>
                    <span>Email:</span>
                    <input type='email' required onChange={(e) => setEmail(e.target.value)} value={email} />
                </label>
                <label>
                    <span>Password:</span>
                    <input type='password' required onChange={(e) => setPassword(e.target.value)} value={password} />
                </label>
                {<button className='btn'>Login</button>}
                {error && alert(error)}
                {/* {isPending && <button className='btn' disabled>loading...</button>}
            {error && <div className='error'>{error}</div>}  */}
            </form>
        </div>
    )
}
