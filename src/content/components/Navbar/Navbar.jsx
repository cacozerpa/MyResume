import React from 'react';
import '../../styles/navbar.css';
import Footer from '../Footer/Footer'

function Navbar() {
    return(
        <>
        <div className='nav-content'>
            <div className='nav-title'>
                <h2>Mi Curriculum</h2>
            </div>
            <div className='button-list'>
                <button className='nav-button'>Inicio</button>
                <button className='nav-button'>Datos</button>
                <button className='nav-button'>Educación</button>
                <button className='nav-button'>Diplomas</button>
            </div>
        </div>
            <Footer/>
        </>
    );
}

export default Navbar