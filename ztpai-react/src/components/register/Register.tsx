import React, {FormEvent, useState} from 'react';
import gym from "../../img/gym.jpg";
import logo from "../../img/logo.svg";
import './register.css';
import axios from "axios";
import {SetToken} from "../../authorization/SetToken";
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

const Register = () => {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');




        const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
        checkName(name);
    };
    const handleSurnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSurname(e.target.value);
        checkSurname(surname);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        checkPassword(password);
        checkConfirmPasswd(password,confirmPassword)
    };
    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(e.target.value);
        //checkPhone(phone);
    };

    const handleConfirmPasswdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value);
        checkConfirmPasswd(password,confirmPassword);
    };
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        checkEmail(email);
    };
    const checkName = (name:string) => {
        if (name === '') {
            setError("Name is required");
        } else {
            setError('');
        }
    }
    const checkSurname = (surname:string) => {
        if (surname === '') {
            setError("Surname is required");
        } else {
            setError('');
        }
    }
    const checkEmail = (email:string) => {
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
            setError("Email is invalid");
        } else {
            setError('');
        }
    }

    const checkPassword = (password:string) => {
        if (password === '') {
            setError('Password is required');
        } else if (password.length < 7) {
            setError('Password must be at least 8 characters long');
        } else if (!/\d/.test(password)) {
            setError('Password must contain at least one number');
        } else if (!/[A-Z]/.test(password)) {
            setError('Password must contain at least one capital letter');
        } else {
            setError('');
        }
    }
    const findError = error === '';

    const checkConfirmPasswd =(password:string,confirmPassword:string) =>{
        if (confirmPassword !== password){
            setError('Passwords do not match')
        }}

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log({
            email: email,
            password: password,
            name: name,
            surname: surname,
            phone: phone
        })
        try {
            const response = await fetch('http://localhost:8080/api/auth/register', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'

                },

                body: JSON.stringify({
                    email: email,
                    password: password,
                    name: name,
                    surname: surname,
                    phone: phone
                })
            });
                if(response.ok) {
                    const data = await response.json();
                    const token = data.token;
                    localStorage.setItem("token", token);
                    SetToken(token);
                    window.location.href = '/activities';
                    setMessage('Registration successful');
                }
                else{
                const errorData = await response.json();
                throw new Error(errorData.message || 'Registration failed');
            }


        } catch (error:any) {
            setMessage(`Registration error: ${error.message}`);
        }

          //  const content = await rawResponse.json();

            //console.log(content);

        // try {
        //     const response = await axios.post('http://localhost:8080/register', {
        //         email: email,
        //         password: password,
        //         name: name,
        //         surname: surname,
        //         phone: phone
        //     });
        //
        //     setMessage(response.data.message);
        //     setAccessToken(response.data.accessToken);
        // } catch (error) {
        //     console.error('Error registering:', error);
        //     setMessage('An error occurred during registration.');
        //     setAccessToken('');
        // }
    };


    return (

        <div className="base-container">
            <section className="left-img">
                <img alt="gym" src={gym}/>
            </section>
            <div className="background-img">
                <img alt="gym" src={gym}/>
            </div>
            <main>
                <header className="registerHeader">
                    <div className="logo">
                        <img alt="logo" src={logo}/>
                    </div>
                </header>
                <section className="registration">
                    <h1>Create account in club</h1>
                    <form onSubmit={handleSubmit} className="register" action="register" method="POST">
                        <div className="columns">
                            <div className="registrationColumn">
                                {error && <p className="errorMessage">{error}</p>}
                                <input name="name" type="text" placeholder="User Name" required value={name} onChange={handleNameChange}/>
                                <input name="surname" type="text" placeholder="User Surname" required value={surname} onChange={handleSurnameChange}/>
                                <input name="email" type="email" placeholder="E-mail"  required value={email}
                                       onChange={handleEmailChange}/>
                                <input name="password" type="password" placeholder="Password" required value={password} onChange={handlePasswordChange}/>
                                <input name="confirmPassword" type="text" placeholder="Confirm password"  required value={confirmPassword} onChange={handleConfirmPasswdChange}/>
                                <input name="phone" type="tel" placeholder="Phone" required value={phone} onChange={handlePhoneChange}/>

                            </div>

                        </div>
                        <button type="submit" className="join">Join now</button>
                        <div className="errprMessage">{message}</div>
                    </form>
                </section>
            </main>
        </div>

    )
};
export default Register;