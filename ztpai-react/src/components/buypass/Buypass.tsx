import React, {useEffect, useState} from 'react';
import './buypass.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import Navigation from "../navigation/Navigation";
import MobileNavigation from "../navigation/MobileNavigation";
import Pricing from "../pricing/Pricing";


const Buypass = () => {

    const [records,setRecords]=useState<Pricing []>([])
    useEffect(()=>{
        fetch("pricing",{
            headers:{'Content-Type':'application/json'},
            method:"get"})
            .then(res=>res.json())
            .then(data => setRecords(data))
            .catch(err => console.log(err))
    },[])


    return (


        <div className="base-container">
            <Navigation/>

            <main>
                <MobileNavigation/>

                <section className="pass">
                    <h1>Select a pass</h1>
                    <div className="passRow">

                        {
                            records.map(item =>(
                                <div id="pass-1" key={item.id}>
                                    <h2>{item.passName}</h2>
                                    <div>
                                    <h3> {item.price}PLN</h3>
                                        <button id="buynow" value="add"><FontAwesomeIcon icon={faPlus}/></button>

                                    </div>
                                </div>

                            ))
                        }

                    </div>

                </section>
            </main>
        </div>


    )
};
export default Buypass;
