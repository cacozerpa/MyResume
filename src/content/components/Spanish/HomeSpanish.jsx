import React from 'react';
import video from '../../video/yt1s.com - free video cyber security background.mp4'
import imagen from '../../images/WhatsApp Image 2021-08-23 at 7.05.38 PM.jpeg';
import node from '../../images/node-logo.jpg';
import rct from '../../images/1200px-React-logo.png';
import c from '../../images/alternative_dev_c___icon__256x256__by_thepi7on-dapvn1w.png'
import mvc from '../../images/mcv.jfif';
import java from '../../images/java.jfif'
import bd from '../../images/bd.jfif';
import pm from '../../images/pm.jfif';
import git from '../../images/git2.png';
import vs from '../../images/vs.jfif'
import pg from '../../images/pg3.png'
import mongo from '../../images/MongoDB.jpeg'
import microsoft from '../../images/microsoft.png';
import html from '../../images/html.png';
import css from '../../images/css.axd.png'
import python from '../../images/python.png'
import django from '../../images/django.jpg'
import Footer from '../Footer/Footer';
import '../../styles/home.css'
import '../../styles/spanishhome.css'

function HomeSpanish(){
    return(
        <>
         <div className='sel-content'>
                <video src={video} autoPlay loop muted></video>
                <div className = 'section'>
                    <div className='esp-content'>
                        <img src={imagen} alt="me" />
                        <h2>¿Quien Soy?</h2>
                        <p>Mi nombre es Carlos Zerpa, Soy un Ing. en Computación de {new Date().getFullYear() - 1998} Venezolano/Colombiano, trabajador y muy responsable. Soy una persona muy organizada al momento de realizar cualquier actividad, ademas de preocuparme porque el ambiente de trabajo siempre sea el mas optimo. Tambien puedo conectar facilmente con otras personas y puedo liderar o ser liderado por los demas sin ningun problema. Al momento de tomar decisiones lo hago de la manera mas rapida y con seguridad. Me gusta estar en constante aprendizaje y puedo captar instrucciones de manera muy rapida y lo mas importante me gusta ser puntual al momento de entregar mis trabajos. </p>

                    </div>
                </div>
                
                <div className = 'section'>
                <div className='skills-content'>
                    <h1>Mis Habilidades:</h1> 
                    <small>Aqui veras algunas de las habilidades que poseo actualmente</small>
                    <div className = 'skill'>
                        <img src={rct} alt="" />  
                        <h2>React.js</h2>   
                        <small>1 año de experiencia</small>     
                    </div>
                    <div className = 'skill'>
                        <img src={node} alt="" />  
                        <h2>Node.js</h2>
                        <small>1 año de experiencia con express.js</small>     
                    </div>
                    <div className = 'skill'>
                        <img src={java} alt="" />  
                        <h2>Java</h2>
                        <small>+1 año de experiencia con Java y Java EE</small>     
                    </div>
                    <div className = 'skill'>
                        <img src={c} alt="" />  
                        <h2>C ++</h2>
                        <small>1 año de experiencia</small>     
                    </div>
                    <div className = 'skill'>
                        <img src={mvc} alt="" /> 
                        <h2>MVC</h2>  
                        <small>+1 año de experiencia</small>       
                    </div>
                    <div className = 'skill'>
                        <img src={bd} alt="" />  
                        <h2>Bases de Datos</h2>
                        <small>+2 años de experiencia con SQL y NoSQL</small>     
                    </div>
                    <div className = 'skill'>
                        <img src={pm} alt="" /> 
                        <h2>Postman</h2> 
                        <small>1 año de experiencia</small>        
                    </div>
                    <div className = 'skill'>
                        <img src={git} alt="" /> 
                        <h2>Git</h2>  
                        <small>+1 año de experiencia</small>       
                    </div>
                    <div className = 'skill'>
                        <img src={vs} alt="" /> 
                        <h2>Visual Studio</h2>  
                        <small>+2 años de experiencia</small>       
                    </div>
                    <div className = 'skill'>
                        <img src={pg} alt="" /> 
                        <h2>PostgreSQL</h2>  
                        <small>+2 años de experiencia</small>       
                    </div>
                    <div className = 'skill'>
                        <img src={mongo} alt="" /> 
                        <h2>MongoDB</h2>   
                        <small>1 año de experiencia</small>      
                    </div>
                    <div className = 'skill'>
                        <img src={microsoft} alt="" /> 
                        <h2>Microsoft Services</h2>
                        <small>+3 años de experiencia</small>         
                    </div>
                    <div className = 'skill'>
                        <img src={html} alt="" /> 
                        <h2>HTML</h2>
                        <small>+2 años de experiencia</small>         
                    </div>
                    <div className = 'skill'>
                        <img src={css} alt="" /> 
                        <h2>CSS</h2>
                        <small>+2 años de experiencia</small>         
                    </div>
                    <div className = 'skill'>
                        <img src={python} alt="" /> 
                        <h2>Python</h2>
                        <small>En aprendizaje</small>         
                    </div>
                    <div className = 'skill'>
                        <img src={django} alt="" /> 
                        <h2>Django</h2>
                        <small>En aprendizaje</small>         
                    </div>
                </div>

                <div className='section'>
                    <div className = 'contact'>
                        
                    </div>
                </div>
                </div>
                
                <div className="section">
                <div className='footer'>
                    <Footer/>
                </div>
                </div>  
            </div>
        </>
    )
}

export default HomeSpanish;