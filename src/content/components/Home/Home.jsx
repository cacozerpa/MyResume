import React from 'react';
import Footer from '../Footer/Footer'
import '../../styles/home.css';
import usa from '../../images/Unknown.png'
import spain from '../../images/spain.png'
import video from '../../video/yt1s.com - free video cyber security background.mp4';

const toSpanish = () => {
    window.location.assign('/esp')
}

function Home(){
    return(
        <>
            <div className='sel-content'>
                <video src={video} autoPlay loop muted></video>
                <div className='selector'>
                    <div className='selector-text'>
                        <h2>Select the Lenguage/Seleccione el Lenguaje</h2>
                        <div className='buttons'>
                        
                            <button className='selector-buttons'>
                                    <img src={usa} alt="" className='usa' />  
                                English</button>
                            <button className='selector-buttons' onClick = {toSpanish}>
                                    <img src={spain} alt="" className='spain'/>
                                Español</button>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>              
        </>
    );
}

export default Home;