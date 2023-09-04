import React from 'react';
import logo from "../../img/logo.svg";
function Logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("role");
    window.location.href = '/login';
}
function NavAdmin() {
    return (
        <nav>
            <img alt="logo" src={logo}></img>
            <a href="ManageUsers" className="button">Users</a>
            <a href="pricing" className="button">Add pass</a>
            <a href="addActivity" className="button">Add activity</a>
            <a className="logout" onClick={Logout}>Logout</a>

        </nav>
    );
}

export default NavAdmin;