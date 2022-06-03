import React, { useState } from 'react'
import Switching from '../../resources/images/switchToScreenSharing.svg'

const SwitchToScreenSharingButton = (props) => {
    const [isScreenSharingActvive, setIsScreenSharingActive] = useState(false)

    const handleScreenSharing = () => {
        setIsScreenSharingActive(!isScreenSharingActvive)
    }

    return (<div className="video_button_container">
        <img src={Switching} alt="screen share" className="video_button_image"/>
    </div>)
};


export default SwitchToScreenSharingButton;
