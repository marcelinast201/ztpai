import React, {useEffect, useState} from 'react';
import './graphic.css';
import Pricing from "../pricing/Pricing";
import Activities from "../activities/Activities";
export interface Activity{
    id:number,
    name:string,
    day:string,
    hour:string
}

const Graphic= ({category}:{category:string}) => {
    const [data,setData]=useState<Activity []>([])
    useEffect(()=>{
        fetch(`activities/category/${category}`,{
            headers:{'Content-Type':'application/json'},
            method:"get"})
            .then(res=>res.json())
            .then(data => setData(data))
            .catch(err => console.log(err))
    },[])
    console.log(data)

    return (


        <div className="base-container">
            <main>
                <section className="graphic">
                    <table className="table table-hover">
                        <tbody>
                        <tr>
                            <th>Activity</th>
                            <th>Day</th>
                            <th>Hour</th>
                            <th>Sign here!</th>
                        </tr>
                        {
                            data.map(item =>(
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td> {item.day}</td>
                                    <td> {item.hour}</td>
                                    <td>
                                        <button id="signUpWithdrawButton" value="add"><i className="fa-solid fa-plus"
                                                                                         id="<?= $activity->getId() ?>"></i>
                                        </button>
                                    </td>
                                </tr>

                            ))
                        }



                        </tbody>
                    </table>
                </section>
            </main>
        </div>
    );
}
export default Graphic;