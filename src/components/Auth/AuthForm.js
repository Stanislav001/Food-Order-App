import { useState, useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import AuthContext from '../../store/auth-context';

import styles from './AuthForm.module.css';

export default function AuthForm() {
    const navigate = useNavigate();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const authCtx = useContext(AuthContext);

    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const switchAuthModeHandler = () => {
        setIsLogin((prevState) => !prevState);
    };

    function submitHandler(event) {
        event.preventDefault();
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        setIsLoading(true);
        let url;
        if (isLogin) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBwLvaXsz92aVRWUO1pC9J7FQanZbSvE9A';
        } else {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBwLvaXsz92aVRWUO1pC9J7FQanZbSvE9A';
        }

        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                email: enteredEmail,
                password: enteredPassword,
                returnSecureToken: true,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((res) => {
            setIsLoading(false);
            if (res.ok) {
                return res.json();
            } else {
                return res.json().then((data) => {
                    let errorMessage = 'Authentication failed!';
                    if (data && data.error && data.error.message) {
                        errorMessage = data.error.message;
                    }

                    throw new Error(errorMessage);
                });
            }
        }).then((data) => {
            authCtx.login(data.idToken);
            navigate('/');
        })
            .catch((err) => {
                alert(err.message);
            });
    };

    return (
        <section className={styles.auth}>
            <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
            <form onSubmit={submitHandler}>
                <div className={styles.control}>
                    <label htmlFor='email'>Your Email</label>
                    <input type='email' id='email' required ref={emailInputRef} />
                </div>
                <div className={styles.control}>
                    <label htmlFor='password'>Your Password</label>
                    <input
                        type='password'
                        id='password'
                        required
                        ref={passwordInputRef}
                    />
                </div>
                <div className={styles.actions}>
                    {!isLoading && (
                        <button>{isLogin ? 'Login' : 'Create Account'}</button>
                    )}
                    {isLoading && <p>Sending request...</p>}
                    <button
                        type='button'
                        className={styles.toggle}
                        onClick={switchAuthModeHandler}
                    >
                        {isLogin ? 'Create new account' : 'Login with existing account'}
                    </button>
                </div>
            </form>
        </section>
    );
};
