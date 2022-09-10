import React, { useState } from 'react';
import './css/LoginForm.css';

const LoginForm = ({ Login, error }) => {
    const [details, setDetails] = useState({ username: "", password: "" });

    const submitHandler = e => {
        e.preventDefault();
        Login(details);
    }
    return (
        <div className='fullscreen-container'>
            <div className='login-container'>
                <form onSubmit={submitHandler}>
                    <div className='form-inner'>
                        <h2 className="title">Login</h2>
                        <div className='form-group'>
                            <label htmlFor='username'>
                                <div className="icon">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                            <path d="M4 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"></path>
                                        </g>
                                    </svg>
                                </div>
                                <input type="text" name="username" placeholder='Username' id="username" onChange={e => setDetails({ ...details, username: e.target.value })} value={details.username} />
                            </label>

                        </div>
                        <div className='form-group'>
                            <label htmlFor='password'>
                                <div className="icon">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2C9.243 2 7 4.243 7 7v2H6c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-9c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v2H9V7zm9.002 13H13v-2.278c.595-.347 1-.985 1-1.722 0-1.103-.897-2-2-2s-2 .897-2 2c0 .736.405 1.375 1 1.722V20H6v-9h12l.002 9z"></path>
                                    </svg>
                                </div>
                                <input type="password" name="password" placeholder='Password' id="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
                            </label>
                        </div>
                        <div className="submit">
                        <input className='button-submit' type="submit" value="Login" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginForm