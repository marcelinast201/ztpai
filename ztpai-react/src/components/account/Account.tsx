import React, {useEffect, useState} from 'react';
import profil from "../../img/profil.svg";
import edit from "../../img/edit.svg";
import './account.css';
import {User} from "../../interface/User";
import {UUID} from "crypto";
import Navigation from "../navigation/Navigation";
import MobileNavigation from "../navigation/MobileNavigation";


const Account = () => {

    const [records, setRecords] = useState<User>({
        id: "00000000-0000-0000-0000-000000000000",
        email: "",
        name: "",
        surname: "",
        phone: ""

    })

    const userId = localStorage.getItem("userId");
    useEffect(() => {
        fetch(`http://localhost:8080/api/users/allDetails/${userId}`, {
            headers: {'Content-Type': 'application/json'},
            method: "get"
        })
            .then(res => res.json())
            .then(data => setRecords(data))
            .catch(err => console.log(err))
    }, [])

    function Logout() {
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        window.location.href = '/login';
    }

    return (


        <div className="base-container">
            <Navigation/>

            <main>
                <MobileNavigation/>

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
                                        <p className="name">{records.name}</p>
                                        {/*//  <input name="name" type="text"></input>*/}

                                        <div className="line"></div>
                                    </div>
                                    <div className="field">
                            <span className="field-label-wrapper">
                                <label className="field-label">Surname </label>
                            </span>
                                        {/*<input name="surname" type="text"/>*/}
                                        <p className="surname">{records.surname}</p>

                                        <div className="line"></div>
                                    </div>
                                    <div className="field">
                             <span className="field-label-wrapper">
                                <label className="field-label">
                                    E-mail
                                </label>
                            </span>
                                        <p className="email">{records.email}</p>

                                        {/*<input name="email" type="text"/>*/}
                                        <div className="line"></div>
                                    </div>

                                    <div className="field">
                               <span className="field-label-wrapper">
                                <label className="field-label">Phone</label>
                            </span>
                                        <p className="phone">{records.phone}</p>

                                        {/*<input name="phone" type="tel"/>*/}
                                        <div className="line"></div>
                                    </div>
                                    <div className="field">



                                        <div className="field">


                                        </div>
                                    </div>
                                </div>
                            </div>

                        </form>
                    </section>
                    <section className="useractivities">
                        <h2>My activities</h2>
                        <div className="my-activities">
                            <table>

                            </table>

                        </div>

                    </section>
                    <section className="passes">
                        <h2>My passes</h2>
                        <div className="my-passes">
                        </div>

                    </section>

                    <a className="logout" onClick={Logout}>Logout</a>

                </div>
            </main>
        </div>
    );
};
export default Account;