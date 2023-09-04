import React, {useEffect, useState} from 'react';
import config from '../../resources/config.json';
import './pricing.css';
import Navigation from "../navigation/Navigation";
import MobileNavigation from "../navigation/MobileNavigation";
import NavAdmin from "../admin/NavAdmin";
import AddItem from "./AddItem";
import {UUID} from "crypto";

interface Pricing {
    id: UUID,
    passName: string,
    price: string,
    term: Date

}

const Pricing = () => {

    const [isAdmin, setIsAdmin] = useState<boolean>(false);
    const [showAddItem, setShowAddItem] = useState(false);
    const [records, setRecords] = useState<Pricing []>([])

    const handleAddItemClick = () => {
        setShowAddItem(true);
    };
    const handleDeletePass = (priceId: UUID) => {

        fetch(`http://localhost:8080/api/pricing/delete/${priceId}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (res.ok) {
                    setRecords(records.filter(pricing => pricing.id.toString() !== priceId));
                } else {
                    console.error('Network error');
                }
            })
            .catch(err => {
                console.error('Network error', err);
            });
    };


    useEffect(() => {
        const userRole = localStorage.getItem('role');
        setIsAdmin(userRole === 'admin');
        fetch("http://localhost:8080/api/pricing", {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'

            }
        })
            .then(res => res.json())
            .then(data => setRecords(data))
            .catch(err => console.log(err))
    }, [])


    return (
        <div className="base-container">


            {isAdmin ? <NavAdmin/> : <Navigation/>}

            <main>
                {!isAdmin && (<MobileNavigation/>)}
                <section className="pricing">

                    <h1>Pricing</h1>

                    <table>
                        <tbody>
                        <tr>
                            <th>Category</th>
                            <th>Price</th>
                            {isAdmin && (
                                <th>Term</th>

                            )}
                        </tr>
                        {
                            records.map(item => (
                                <tr key={item.id}>
                                    <td>{item.passName}</td>
                                    <td> {item.price} zł</td>
                                    {isAdmin && (
                                    <td>
                                        <button
                                            className="delete-user" onClick={() => handleDeletePass(item.id)}>
                                            DELETE
                                        </button>
                                    </td>
                                    )}
                                </tr>

                            ))
                        }
                        {showAddItem && <AddItem updateData={setRecords}/>}

                        </tbody>
                    </table>
                    {isAdmin && (
                        <div>
                            <button className="add" type="button" onClick={handleAddItemClick}>
                                ADD
                            </button>

                        </div>
                    )}
                    {!isAdmin && (
                        <a href="buypass" className="buyhere">
                            BUY HERE
                        </a>)}

                </section>
            </main>
        </div>
    )
};
export default Pricing;
