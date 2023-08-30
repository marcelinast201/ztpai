import React, {useEffect, useState} from 'react';
import './graphic.css';
import '../button/toggleButton.css'
import Pricing from "../pricing/Pricing";
import Activities from "../activities/Activities";

import ToggleButton from "../button/ToggleButton";

export interface Activity {
    id: string,
    name: string,
    day: string,
    hour: string
}

const Graphic = ({category}: { category: string }) => {
    const [data, setData] = useState<Activity []>([])

    useEffect(() => {
        const url = category !== 'All'
            ? `http://localhost:8080/api/activities/category/${category}`
            : 'http://localhost:8080/api/activities';


        fetch(url, {
            headers: {'Content-Type': 'application/json'},
            method: "get"
        })
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => console.log(err))
    }, [])

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
                            data.map(item => (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td> {item.day}</td>
                                    <td> {item.hour}</td>
                                    <td className="signUpWithdrawButton">
                                        <div className="fa-solid fa-plus">
                                            <ToggleButton activityId={item.id}  isAdded={false} />
                                        </div>
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