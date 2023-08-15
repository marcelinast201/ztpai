import React from 'react';
import profil from "../../img/profil.svg";
import edit from "../../img/edit.svg";
import './account.css';
import Navigation from '../navigation/Navigation';
import MobileNavigation from '../navigation/MobileNavigation';

const Account = () => {
    return (


        <div className="base-container">


            <main>

                <div className="content">
                    <section className="account">
                        <h2>My account</h2>
                        <form className="my-account">
                            <div className="accountColumns">
                                <div className="accountColumn">
                                    <img alt="photo" className="photo" src={profil}/>
                                    <a href="editprofile" className="button"/> <img alt="edit" className="edit"
                                                                                    src={edit}/>


                                </div>
                                <div className="accountColumn">
                                    <div className="field">
                            <span className="field-label-wrapper">
                                <label className="field-label">
                                    First name
                                </label>
                            </span>

                                        <input name="name" type="text"/>

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
                                <label className="field-label">Phone</label>
                            </span>
                                        <input name="phone" type="tel"/>
                                        <div className="line"></div>
                                    </div>
                                    <div className="field">
                            <span className="field-label-wrapper">
                                <label className="field-label">City</label>
                            </span>
                                        <input name="city" type="text"/>

                                        <div className="line"></div>
                                    </div>
                                    <div className="field">
                             <span className="field-label-wrapper">
                                <label className="field-label">Citizenship</label>
                            </span>
                                        <input name="citizenship" type="text"/>
                                        <div className="line"></div>
                                    </div>
                                </div>

                                <div className="accountColumn">
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
                                    User Name
                                </label>
                            </span>
                                        <input name="username" type="text"/>
                                        <div className="line"></div>
                                    </div>


                                    <div className="field">
                             <span className="field-label-wrapper">
                                <label className="field-label">Address</label>
                            </span>
                                        <input name="address" type="text"/>


                                        <div className="line"></div>
                                    </div>
                                    <div className="field">
                             <span className="field-label-wrapper">
                                <label className="field-label">City code</label>
                            </span>

                                        <input name="city_code" type="text"/>

                                        <div className="line"></div>
                                    </div>
                                    <div className="field">
                            <span className="field-label-wrapper">
                                <label className="field-label">Date of birth</label>
                            </span>
                                        <input name="dateOfBirth" type="text"/>

                                        <div className="line"></div>
                                    </div>
                                </div>
                            </div>

                        </form>
                    </section>

                    <a className="logout" href="logout">Logout</a>

                </div>
            </main>
        </div>
    );
};
export default Account;