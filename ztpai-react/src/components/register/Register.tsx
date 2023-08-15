import React, {useState} from 'react';
import gym from "../../img/gym.jpg";
import logo from "../../img/logo.svg";
import './register.css';

const Register = () => {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');



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
                    <form className="register" action="register" method="POST">
                        <div className="columns">
                            <div className="registrationColumn">
                                <input name="name" type="text" placeholder="User Name"/>
                                <input name="surname" type="text" placeholder="User Surname"/>
                                <input name="username" type="text" placeholder="User Name"/>
                                <input name="email" type="text" placeholder="E-mail"/>
                                <input name="password" type="password" placeholder="Password"/>
                                <input name="confirmPassword" type="text" placeholder="Confirm password"/>
                                <input name="phone" type="tel" placeholder="Phone"/>

                            </div>

                        </div>
                        <button type="submit" className="join">Join now</button>
                    </form>
                </section>
            </main>
        </div>

    )
};
export default Register;