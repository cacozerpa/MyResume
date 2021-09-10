import React from "react";
import video from '../../video/yt1s.com - free video cyber security background.mp4'
import imagen from '../../images/WhatsApp Image 2021-08-23 at 7.05.38 PM.jpeg';
import Footer from '../Footer/Footer';
import '../../styles/home.css'
import '../../styles/datastyle.css'

function DataSpanish(){
    return(
        <>
            <div className="data-content">
                <video src={video} autoPlay loop muted></video>
                    <div className = 'data-info'>
                        <img src={imagen} alt="" />
                        <div className='info'>
                            <b>Nombre:</b>
                            <small>Carlos Gerardo Zerpa Urdaneta</small>
                        </div>
                        <div className='info'>
                            <b>Nacionalidad:</b>
                            <small>Venezolano/Colombiano</small>
                        </div>
                        <div className='info'>
                            <b>Edad:</b>
                            <small>{new Date().getFullYear() - 1998} años</small>
                        </div>
                        <div className='info'>
                            <b>Profesión:</b>
                            <small>Ingeniero en Computación</small>
                        </div>
                        <div className='info'>
                            <b>Fecha de Nacimiento:</b>
                            <small>29 de septiembre de 1998</small>
                        </div>
                        <div className='info'>
                            <b>Idiomas:</b>
                            <small>Ingles/Español</small>
                        </div>
                        <div className='info'>
                            <b>Correo Electronico:</b>
                            <small>zerpa2007@hotmail.com/carlos.zerpau1998@gmail.com</small>
                        </div>
                        <div className='info'>
                            <b>Número Telefonico:</b>
                            <small>+58 424-6002854</small>
                        </div>
                    </div>
                    <div className="footer-data">
                        <Footer/>
                    </div>
            </div>  
        </>
    )
}

export default DataSpanish