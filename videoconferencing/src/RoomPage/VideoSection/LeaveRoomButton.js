import React, { useState } from 'react'

const LeaveRoomButton = (props) => {
    const [isLocalVideoDisabled, setIsLocalVideoDisabled] = useState(false)

    const handleRoomDisconnection = () => {
        const siteUrl = window.location.origin
        setIsLocalVideoDisabled(!isLocalVideoDisabled)
    }

    return <div className="video_button_container">
        <button className="video_button_end" onclick={handleRoomDisconnection}>
            Leave Room
        </button>
    </div>
};

export default LeaveRoomButton;
