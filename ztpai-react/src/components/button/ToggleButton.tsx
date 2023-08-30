import React, { useState } from "react";
import './toggleButton.css';
import {UUID} from "crypto";
interface ToggleButtonProps {
    activityId: number;
    isAdded: boolean;
}
const ToggleButton: React.FC<ToggleButtonProps> = ({ activityId, isAdded }) => {
    const [isPlus, setIsPlus] = useState(!isAdded);
    const [showMessage, setShowMessage] = useState(false);
    const [message, setMessage] = useState("");

    const toggleIcon = () => {

        setIsPlus(!isPlus);

        if (isPlus) {
            sendPostRequest("add",activityId);
        } else {
            sendPostRequest( "remove",activityId);
        }
    }
    const sendPostRequest = (action: string, activityId: number, ) => {
        const userId = localStorage.getItem("userId");
        const url = action === "add"
            ? `http://localhost:8080/api/users/${userId}/assignActivity`
            : `http://localhost:8080/api/users/${userId}/removeActivity`;

        fetch(url, {
            method: "post",
            headers: { "Content-Type": "application/text" },
            body: `${activityId}` ,
        })
            .then(data => { console.log("Response from server:", data);
                const messageText = action === "add" ? "Zapisałeś się na zajęcia" : "Wypisałeś się";
                setMessage(messageText);
                setShowMessage(true);
                setTimeout(() => {
                    setShowMessage(false);
                }, 4000);
            })
            .catch(error => console.error("Error:", error));
    };

    return (
        <div>
            {!showMessage ? (
                <div className="signUpWithdrawButton">
                <button className="toggle-button" onClick={toggleIcon}>
                    {isPlus ? "+" : "-"}
                </button>
                </div>
            ) : (
                <div className="assignMessage">{message}</div>
            )}
        </div>
    );
}

export default ToggleButton;
