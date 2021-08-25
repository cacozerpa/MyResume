import React from 'react';
import '../../styles/footer.css';

function Footer(){
    return(
        <>
        <div className='footer-content'>
            <div className='rights'>
               <div className='social'>
                   <h2>Social Media</h2>
                   <a href="https://www.instagram.com/caco_zerpa/">Instagram: @caco_zerpa</a>
                   <a href="https://github.com/cacozerpa">GitHub: cacozerpa</a>
               </div>
                <small>&copy; {new Date().getFullYear()} Carlos Zerpa | All Rights Reserved</small>
            </div>   
        </div>
        </>
    );
}

export default Footer