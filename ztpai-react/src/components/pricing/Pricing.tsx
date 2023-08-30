import React, {useEffect, useState} from 'react';
import config from '../../resources/config.json';
import './pricing.css';
import Navigation from "../navigation/Navigation";
import MobileNavigation from "../navigation/MobileNavigation";

interface  Pricing{
    id:number,
    passName:string,
    price:string,
    term:Date

}
const Pricing = () => {

    const [records,setRecords]=useState<Pricing []>([])
    useEffect(()=>{
        fetch("http://localhost:8080/api/pricing",{
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



    return (
    <div className="base-container">


       <Navigation/>
        <main>
           <MobileNavigation/>
            <section className="pricing">

                <h1>Pricing</h1>

                <table>
                    <tbody>
                    <tr>
                        <th>Category</th>
                        <th>Price</th>
                    </tr>
                    {
                        records.map(item =>(
                            <tr key={item.id}>
                                <td>{item.passName}</td>
                                <td> {item.price} zł</td>
                            </tr>

                        ))
                    }

                    </tbody>
                </table>

                <a href="buypass" className="buyhere">
                    BUY HERE
                </a>

            </section>
        </main>
    </div>
    )};
export default Pricing;
