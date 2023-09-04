import React, {useEffect, useState} from 'react';
import NavAdmin from "./NavAdmin";
import './admin.css'
import {User} from "../../interface/User";
import {UUID} from "crypto";

function ManageUsers() {

    const [records,setRecords]=useState<User []>([])
    useEffect(()=>{
        fetch("http://localhost:8080/api/users",{
            method:'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'

            }
        })
            .then(res=>res.json())
            .then(data => setRecords(data))
            .catch(err => console.log(err))
    },[])

    const handleDeleteUser = (userId:UUID) => {

        fetch(`http://localhost:8080/api/users/delete/${userId}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (res.ok) {
                    setRecords(records.filter(user => user.id !== userId));
                } else {
                    console.error('Network error');
                }
            })
            .catch(err => {
                console.error('Network error', err);
            });
    };
    return (

        <body>
        <div className="base-container">
           <NavAdmin/>

            <main>


                <div className="message-div"></div>
                <section className="admin">
                    <h1>Users Managemant</h1>
                    <table>
                        <tbody>
                        <tr>

                            <th>E-mail</th>

                        </tr>
                        { records.map(item => (
                            <tr key={item.id}>
                                <td>{item.email}</td>

                                <td>
                                    <button
                                        className="delete-user"onClick={() => handleDeleteUser(item.id)}

                                    >
                                        DELETE
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </section>
            </main>
        </div>
        </body>

    );
}

export default ManageUsers;
