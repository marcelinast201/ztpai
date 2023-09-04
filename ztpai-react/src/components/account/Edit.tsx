import React, {useEffect, useState} from 'react';
import profil from "../../img/profil.svg";
import edit from "../../img/edit.svg";
import './account.css';
import {User} from "../../interface/User";
import '../pricing/pricing.css'
import {UUID} from "crypto";
import Navigation from "../navigation/Navigation";
import MobileNavigation from "../navigation/MobileNavigation";
import Account from "./Account";

export interface Edit {
    id: UUID,
    email: string,
    password: string
    name: string,
    surname: string,
    phone: string
}


const Edit = () => {

    return (
        <div className="base-container">
            <Navigation/>

            <main>
                <MobileNavigation/>

                <div className="content">
                    <section className="account">
                        <h2>Edit your profile</h2>
                        <form className="my-account">
                            <div className="accountColumns">
                                <div className="accountColumn">
                                    <img alt="photo" className="photo" src={profil}/>
                                </div>
                                <div className="accountColumn">
                                    <div className="field">
                                        <span className="field-label-wrapper">
                                            <label className="field-label">
                                                First name
                                            </label>
                                        </span>
                                        <input name="name" type="text"></input>
                                        <div className="line"></div>
                                    </div>
                                    <div className="field">
                                        <span className="field-label-wrapper">
                                            <label className="field-label">Surname </label>
                                        </span>
                                        <input name="surname" type="text"/>
                                        <div className="line"></div>
                                    </div>
                                    <div className="field">
                                        <span className="field-label-wrapper">
                                            <label className="field-label">
                                                E-mail
                                            </label>
                                        </span>
                                        <input name="email" type="text"/>
                                        <div className="line"></div>
                                    </div>
                                    <div className="field">
                                        <span className="field-label-wrapper">
                                            <label className="field-label">
                                                Password                                            </label>
                                        </span>
                                        <input name="password" type="text"/>
                                        <div className="line"></div>
                                    </div>
                                    <div className="field">
                               <span className="field-label-wrapper">
                                <label className="field-label">Phone</label>
                            </span>
                                        <input name="phone" type="tel"/>
                                        <div className="line"></div>
                                    </div>
                                    <div className="field">
                                        <div className="field">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <a className="save
                       " onClick={Account}>Save</a>

                    </section>
                </div>
            </main>
        </div>
    );
};
export default Edit;