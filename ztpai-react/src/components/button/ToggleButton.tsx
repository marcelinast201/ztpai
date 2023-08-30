import React, { useState } from "react";
import './toggleButton.css';
interface ToggleButtonProps {
    activityId: string;
    isAdded: boolean;
}
const ToggleButton: React.FC<ToggleButtonProps> = ({ activityId, isAdded }) => {
    const [isPlus, setIsPlus] = useState(!isAdded);

    const toggleIcon = () => {
        setIsPlus(!isPlus);

        if (isPlus) {
            sendPostRequest("add",activityId);
        } else {
            sendPostRequest( "remove",activityId);
        }
    }
    const sendPostRequest = (action: string, activityId: string, ) => {
        const userId = localStorage.getItem("userId");
        const url = action === "add"
            ? `http://localhost:8080/api/users/${userId}/assignActivity`
            : `http://localhost:8080/api/users/${userId}/removeActivity`;

        fetch(url, {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ activityId }),
        })
            .then(response => response.json())
            .then(data => { console.log("Response from server:", data);
            })
            .catch(error => console.error("Error:", error));
    };

    return (
        <button className="toggle-button" onClick={toggleIcon}>
            {isPlus ? "+" : "-"}
        </button>
    );
}

export default ToggleButton;
