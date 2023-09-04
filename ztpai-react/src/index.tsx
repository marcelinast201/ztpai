import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import LoginComponent  from './components/login/LoginComponent';
import Activities  from './components/activities/Activities';
import Buypass from "./components/buypass/Buypass";
import Pricing from "./components/pricing/Pricing";
import Register from "./components/register/Register";
import Account from "./components/account/Account";
import Edit from "./components/account/Edit";
import GuardedRoute, {GuardedRouteProps} from './guard/guarded-route';
import Admin from "./components/admin/Admin";
import AddActivity from "./components/admin/AddActivity";
import ManageUsers from "./components/admin/ManageUsers";
import NotFound from "./notfound/NotFound";


const defaultGuardedRouteProps: Omit<GuardedRouteProps, 'outlet'> = {
    isAuthenticated: localStorage.getItem("userId") !== null,
    authenticationPath: '/login',
};
const isAdmin = localStorage.getItem("role") === "admin";
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path="login" element={<LoginComponent/>}/>
            <Route path="register" element={<Register/>}/>
            {/*<Route path='panel' element={<GuardedRoute {...defaultGuardedRouteProps}/>}>*/}
            <Route path="activities" element={<Activities/>}/>
            <Route path="buypass" element={<Buypass/>}/>
            <Route path="pricing" element={<Pricing/>}/>
            <Route path="account" element={<Account/>}/>
            <Route path="edit" element={<Edit/>}/>

            {isAdmin ? (
                <>
                    <Route path="admin" element={<Admin />} />
                    <Route path="addActivity" element={<AddActivity />} />
                    <Route path="manageUsers" element={<ManageUsers />} />

                </>
            ) : (
                <Route path="*" element={<Navigate to="/notfound" />} />
            )}
            <Route path="notfound" element={<NotFound />} />
            {/*</Route>*/}



        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
