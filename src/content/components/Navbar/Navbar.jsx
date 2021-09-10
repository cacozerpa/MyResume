import React from 'react';
import '../../styles/navbar.css';

function Navbar() {

    const toLenguaje = () => {
        window.location.assign('/')
    }

    const toEsp = () => {
        window.location.assign('esp')
    }

    const toData = () => {
        window.location.assign('/espdata')
    }
    return(
        <>
        <div className='nav-content'>
            <div className='nav-title'>
                <h2>Carlos Zerpa</h2>
            </div>
            <div className='button-list'>
                <button className='nav-button' onClick={toLenguaje}>Lenguaje</button>
                <button className='nav-button' onClick={toEsp}>Inicio</button>
                <button className='nav-button' onClick={toData}>Datos</button>
                <button className='nav-button'>Educación</button>
                <button className='nav-button'>Diplomas</button>
            </div>
        </div>
        </>
    );
}

export default Navbar