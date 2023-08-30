import React, {useEffect, useState} from 'react';
import './buypass.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import Navigation from "../navigation/Navigation";
import MobileNavigation from "../navigation/MobileNavigation";
import Pricing from "../pricing/Pricing";
import {PassInterface} from "../account/Account";


const Buypass = () => {
    const [paymentSuccess, setPaymentSuccess] = useState(false);

    const [records,setRecords]=useState<Pricing []>([])
    useEffect(()=>{
        fetch("http://localhost:8080/api/pricing",{
            headers:{'Content-Type':'application/json'},
            method:"get"})
            .then(res=>res.json())
            .then(data => setRecords(data))
            .catch(err => console.log(err))
    },[])

    const handleAddButtonClick = (item: Pricing) => {

        const userId = localStorage.getItem('userId');
        const url = `http://localhost:8080/api/pass/${userId}/assign`;

        fetch(url, {
            method: 'post',
            headers: { 'Content-Type': 'application/text' },
            body: `${item.id}`
        })
            .then((data) => {
                console.log('Response from server:', data);
                setPaymentSuccess(true);
            })
            .catch((error) => console.error('Error:', error));
    };

    return (


        <div className="base-container">
            <Navigation/>

            <main>
                <MobileNavigation/>
                {paymentSuccess ? <div className="successPayment"><p>The payment went smoothly</p>
                    </div>:(
                <section className="pass">
                    <h1>Select a pass</h1>

                    <div className="passRow">

                        {
                            records.map(item =>(
                                <div id="pass-1" key={item.id}>
                                    <h2>{item.passName}</h2>
                                    <div>
                                    <h3> {item.price}PLN</h3>
                                        <button id="buynow" value="add" onClick={() => handleAddButtonClick(item)}>Buy now</button>

                                    </div>
                                </div>

                            ))
                        }

                    </div>

                </section>
                )}
            </main>
        </div>


    )
};
export default Buypass;
