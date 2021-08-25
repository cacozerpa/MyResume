import React from 'react';
import video from '../../video/yt1s.com - free video cyber security background.mp4'
import imagen from '../../images/WhatsApp Image 2021-08-23 at 7.05.38 PM.jpeg';
import '../../styles/home.css'
import '../../styles/spanishhome.css'

function HomeSpanish(){
    return(
        <>
         <div className='sel-content'>
                <video src={video} autoPlay loop muted></video>
                <div className='esp-content'>
                    <img src={imagen} alt="" />
                </div>
            </div>
        </>
    )
}

export default HomeSpanish;