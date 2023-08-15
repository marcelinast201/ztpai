import React from 'react';
import logo from "../../img/logo.svg";
import './navigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping,faPersonRunning,faMoneyBill1Wave} from '@fortawesome/free-solid-svg-icons'

const Navigation = () => {
    return (



        <nav>
            <img alt="logo" src={logo}></img>
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faCartShopping} />
                        <a href="buypass" className="button">Buy pass</a>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faPersonRunning} />
                        <a href="activities" className="button">Group activities</a>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faMoneyBill1Wave} />
                        <a href="pricing" className="button">Pricing</a>
                    </li>
                </ul>
        </nav>
    );
};
export default Navigation;