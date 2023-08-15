import React, {useState} from 'react';
import logo from "../../img/logo.svg";
import './login.css';
import axios from "axios";

const LoginComponent = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setError('');
        setLoading(true);
        fetch("pricing",{
            headers:{'Content-Type':'application/json'},
            method:"get"})

        try {
            const response = await fetch("login",{
                headers:{'Content-Type':'application/json'},
                method:"post",
                body: JSON.stringify({email, password}),
            });

            setLoading(false);
            window.location.href = "activities";
        } catch (error) {
            setError('Błąd logowania. Spróbuj ponownie.');
            setLoading(false);
        }
    };

    return (


        <div className="container">
            <div className="logo">
                <img src={logo} id="header-logo" alt="logo"/>
            </div>
            <div className="login-container">
                <form className="login" onClick={handleSubmit}>
                    <div className="messages">

                    </div>
                    <input name="email"
                        type="text"
                        placeholder="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required>

                    </input>
                    <input name="password"
                           type="password"
                           placeholder="password"
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
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
