import React, { useState } from 'react'

import Camera from '../../resources/images/camera.svg'
import CameraOff from '../../resources/images/cameraOff.svg'

const CameraButton = (props) => {
    const [isLocalVideoDisabled, setIsLocalVideoDisabled] = useState(false)

    const handleCameraButton = () => {
        setIsLocalVideoDisabled(!isLocalVideoDisabled)
    }

    return <div  className="video_button_container">
        <img src={isLocalVideoDisabled ? CameraOff : Camera}
            alt="Camera Button"
            onClick={handleCameraButton}
            className="video_button_image"
        />
    </div>
};

export default CameraButton;
