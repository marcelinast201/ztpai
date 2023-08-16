import React, {useState} from 'react';
import all from "../../img/all.svg";
import run from "../../img/run.svg";
import dance from "../../img/dance.svg";
import joga from "../../img/joga.svg";
import combat from "../../img/combat.svg";
import strength from "../../img/strength.svg";
import './activities.css';
import Navigation from '../navigation/Navigation';
import MobileNavigation from '../navigation/MobileNavigation';
import Graphic from "../graphic/Graphic";
interface  Activity{
    id:number,
    name:string,
    day:string,
    hour:string

}
const Activities = () => {

    const [categories,setCategories]=useState("");
    const [activityDetails, setActivityDetails]=useState(false);


    const activities1 = [
        {
            name: "All", source: all
        },
        {
            name: "Cardio", source: run
        },
        {
            name: "Combat", source: combat
        },
    ]
    const activities2 = [
        {
            name: "Body & Mind", source: joga
        },
        {
            name: "Dance", source: dance
        },
        {
            name: "Strength", source: strength
        }
        ]

    const showDetailsActivity =(category:string)=>{
        setActivityDetails(true);
        setCategories(category);
    }

    return (

        <div className="base-container">
            <Navigation/>
            <main>
                <MobileNavigation/>
                {activityDetails && <Graphic category={categories}/>}
                {!activityDetails && (
                    <section className=" activities">
                        <h1>Group activity</h1>
                        <div className="activitiesRows">
                            <div className="activitiesRow">
                                {activities1.map(item => (
                                    <div key={item.name}>
                                        <div onClick={()=>showDetailsActivity(item.name) } className="button">
                                            <img alt={item.name} src={item.source}></img>
                                            <div>
                                                <h2>{item.name}</h2>
                                            </div>
                                        </div>
                                    </div>
                                ))
                                }
                            </div>
                            <div className="activitiesRow">
                                {activities2.map(item => (
                                    <div key={item.name}>
                                        <div onClick={()=>showDetailsActivity(item.name)} className="button">
                                            <img alt={item.name} src={item.source}></img>
                                            <div>
                                                <h2>{item.name}</h2>
                                            </div>
                                        </div>
                                    </div>
                                ))
                                }
                            </div>
                        </div>
                    </section>
                )}

            </main>

        </div>
    );
};
export default Activities;