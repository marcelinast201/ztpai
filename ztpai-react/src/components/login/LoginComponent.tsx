import React, {useState} from 'react';
import logo from "../../img/logo.svg";
import './login.css';
import axios from "axios";
import {SetToken} from "../../authorization/SetToken";

const LoginComponent = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try{
            const response = await fetch('http://localhost:8080/api/auth/login', {
                method: "POST",
                body: JSON.stringify({email, password}),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'

                }
            });

            if(response.ok) {
                const data = await response.json();
                const token = data.token;
                localStorage.setItem("token", token);
                SetToken(token);
                window.location.href = "/activities";
            } else {
                const errData = await response.json();
                setError(errData.message);
            }
        } catch (e) {
            setError('Network problem, try again later');
        }
    };

    return (


        <div className="container">
            <div className="logo">
                <img src={logo} id="header-logo" alt="logo"/>
            </div>
            <div className="login-container">
                <form className="login" onClick={handleSubmit}>
                    {error && <div className="errorMessage">{error}</div>}
                    <input name="email"
                        type="text"
                        placeholder="email"
                        value={email}
                        onChange={handleEmailChange}
                        required>

                    </input>
                    <input name="password"
                           type="password"
                           placeholder="password"
                           value={password}
                           onChange={handlePasswordChange}
                           required>

                    </input>

                    <button type="submit" className="login">Log in</button>
                    <a href="register" className="join">Join now</a>
                </form>
            </div>
        </div>

    );
};
export default LoginComponent;
