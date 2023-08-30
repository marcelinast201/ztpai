import React, {useEffect, useState} from 'react';
import profil from "../../img/profil.svg";
import edit from "../../img/edit.svg";
import './account.css';
import {User} from "../../interface/User";
import '../pricing/pricing.css'
import {UUID} from "crypto";
import Navigation from "../navigation/Navigation";
import MobileNavigation from "../navigation/MobileNavigation";

export interface UserData {
    id: UUID,
    email: string,
    name: string,
    surname: string,
    phone: string
}

export interface DataType {
    activity: [],
    pass: [],
    user?: UserData
}
export interface ActivityInterface{
    id:number,
    name:string,
    day:string,
    hour:string
}
export interface PassInterface{
    id:number,
    expires: Date,

}

const Account = () => {
    const userId = localStorage.getItem("userId");
    const urls = {
        activity: `http://localhost:8080/api/users/${userId}/activities`,
        pass: `http://localhost:8080/api/pass/${userId}/passess`,
        user: `http://localhost:8080/api/users/allDetails/${userId}`
    }

    const [records, setRecords] = useState<DataType>({
        activity: [],
        pass: [],
        user: {
            id: "00000000-0000-0000-0000-000000000000",
            email: "",
            name: "",
            surname: "",
            phone: ""
        }

    })
    //const date = new Date(records.pass.);


    useEffect(() => {
        Promise.all([
            fetch(urls.activity), fetch(urls.pass), fetch(urls.user)
        ]).then(([activity, pass, user]) => (
            Promise.all([activity.json(), pass.json(), user.json()])
        )).then(([activity, pass, user]) => (
            setRecords({activity, pass, user})
        )).catch(error => {
            if ([400, 401, 403, 404].includes(error.status)) {
                return ({
                    status: error.status,
                    response: error.response
                })
            }
            return ({
                status: error.status,
                response: "Cannot connect with server"
            });
        });
    },[]);

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
                                        <p className="name">{records.user?records.user.name:""}</p>
                                        {/*//  <input name="name" type="text"></input>*/}

                                        <div className="line"></div>
                                    </div>
                                    <div className="field">
                            <span className="field-label-wrapper">
                                <label className="field-label">Surname </label>
                            </span>
                                        {/*<input name="surname" type="text"/>*/}
                                        <p className="surname">{records.user?records.user.surname:""}</p>

                                        <div className="line"></div>
                                    </div>
                                    <div className="field">
                             <span className="field-label-wrapper">
                                <label className="field-label">
                                    E-mail
                                </label>
                            </span>
                                        <p className="email">{records.user?records.user.email:""}</p>

                                        {/*<input name="email" type="text"/>*/}
                                        <div className="line"></div>
                                    </div>

                                    <div className="field">
                               <span className="field-label-wrapper">
                                <label className="field-label">Phone</label>
                            </span>
                                        <p className="phone">{records.user?records.user.phone:""}</p>

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
                            <table >
                                <tbody>
                                <tr>
                                    <th>Activity</th>
                                    <th>Day</th>
                                    <th>Hour</th>
                                </tr>
                                {
                                    records.activity.map((activityItem:ActivityInterface) =>(
                                        <tr key={activityItem.id}>
                                            <td>{activityItem.name}</td>
                                            <td> {activityItem.day} </td>
                                            <td> {activityItem.hour} </td>
                                        </tr>

                                    ))
                                }

                                </tbody>
                            </table>

                        </div>

                    </section>
                    <section className="passes">
                        <h2>My passes</h2>
                        <div className="my-passes">
                            <table >
                                <tbody>
                                <tr>
                                    <th>Expire</th>
                                </tr>
                                {
                                    records.pass.map((passItem:PassInterface) =>{
                                    const expirationDate = new Date(passItem.expires);
                                    const currentDate = new Date();

                                    if (expirationDate > currentDate) {
                                    return (
                                    <tr key={passItem.id}>
                                    <td>{expirationDate.toLocaleDateString()}</td>
                                    </tr>
                                    );
                                }

                                    return null;
                                })}
                                </tbody>
                            </table>
                        </div>

                    </section>

                    <a className="logout" onClick={Logout}>Logout</a>

                </div>
            </main>
        </div>
    );
};
export default Account;