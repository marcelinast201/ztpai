import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginComponent  from './components/login/LoginComponent';
import Activities  from './components/activities/Activities';
import Buypass from "./components/buypass/Buypass";
import Pricing from "./components/pricing/Pricing";
import Register from "./components/register/Register";
import Account from "./components/account/Account";





const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path="login" element={<LoginComponent/>}/>
            <Route path="activities" element={<Activities/>}/>
            <Route path="buypass" element={<Buypass/>}/>
            <Route path="pricing" element={<Pricing/>}/>
            <Route path="register" element={<Register/>}/>
            <Route path="account" element={<Account/>}/>




        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
