import React from 'react';

import logo from "../../img/logo.svg";
import './navigation.css';
import '../login/login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faCartShopping,faBell} from '@fortawesome/free-solid-svg-icons'


const MobileNavigation = () => {
    return (
        <header>
            <div className="mobile-header">
                <button className="hamburger">
                    <div className="bar"></div>
                </button>
                <div className="mobile-logo">
                    <img alt="logo" src={logo}></img>
                </div>

            </div>
            <div className="bell">
                <a href="bell" className="button">
            <FontAwesomeIcon icon={faBell} style={{color: "#2ec721",}} />
                </a>
            </div>
            <div className="profil">
                <a href="account" className="button">
                    <FontAwesomeIcon icon={faUser} style={{color: "#2ec721",}} />
                </a>
            </div>
            <nav className="mobile-nav">

                <ul>
                    <li>
                        <FontAwesomeIcon icon={faCartShopping} />
                        <a href="buypass" className="button">Buy pass</a>
                    </li>
                    <li>
                        <i className="fa-solid fa-person-running"></i>
                        <a href="activities" className="button">Group activities</a>
                    </li>
                    <li>
                        <i className="fa-solid fa-money-bill-wave"></i>
                        <a href="pricing" className="button">Pricing</a>
                    </li>
                </ul>
            </nav>
        </header>

    )
};
export default MobileNavigation;