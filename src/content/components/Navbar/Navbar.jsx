import React from 'react';
import '../../styles/navbar.css';

function Navbar() {
    return(
        <>
        <div className='nav-content'>
            <div className='nav-title'>
                <h2>Carlos Zerpa</h2>
            </div>
            <div className='button-list'>
                <button className='nav-button'>Inicio</button>
                <button className='nav-button'>Datos</button>
                <button className='nav-button'>Educación</button>
                <button className='nav-button'>Diplomas</button>
            </div>
        </div>
        </>
    );
}

export default Navbar