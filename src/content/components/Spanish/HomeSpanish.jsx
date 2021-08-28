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
import Footer from '../Footer/Footer';
import '../../styles/home.css'
import '../../styles/spanishhome.css'

function HomeSpanish(){
    return(
        <>
         <div className='sel-content'>
                <video src={video} autoPlay loop muted></video>
                <div className='esp-content'>
                    <img src={imagen} alt="me" />
                    <h2>¿Quien Soy?</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    
                    <p>Pizzle ghetto fo shizzle sizzle tellivizzle, shiz adipiscing elit. Nullizzle tellivizzle velit, mofo volutpizzle, boom shackalack da bomb, owned vizzle, pimpin'. Pellentesque eget crunk. Sed erizzle. Fusce izzle dolizzle dapibus boofron tempizzle shizzle my nizzle crocodizzle. My shizz shizzle my nizzle crocodizzle nibh sheezy turpis. Crazy izzle bizzle. Pellentesque eleifend rhoncizzle ass. In stuff habitasse platea dictumst.</p>
                </div>

                <div className='skills-content'>
                    <h1>Mis Habilidades</h1>
                    <div className = 'skill'>
                        <img src={rct} alt="" />  
                        <h2>React.js</h2>   
                        <small>Test</small>     
                    </div>
                    <div className = 'skill'>
                        <img src={node} alt="" />  
                        <h2>Node.js</h2>
                        <small>Test</small>     
                    </div>
                    <div className = 'skill'>
                        <img src={java} alt="" />  
                        <h2>Java</h2>
                        <small>Test</small>     
                    </div>
                    <div className = 'skill'>
                        <img src={c} alt="" />  
                        <h2>C ++</h2>
                        <small>Test</small>     
                    </div>
                    <div className = 'skill'>
                        <img src={mvc} alt="" /> 
                        <h2>MVC</h2>  
                        <small>Test</small>       
                    </div>
                    <div className = 'skill'>
                        <img src={bd} alt="" />  
                        <h2>Bases de Datos</h2>
                        <small>Test</small>     
                    </div>
                    <div className = 'skill'>
                        <img src={pm} alt="" /> 
                        <h2>Postman</h2> 
                        <small>Test</small>        
                    </div>
                    <div className = 'skill'>
                        <img src={git} alt="" /> 
                        <h2>Git</h2>  
                        <small>Test</small>       
                    </div>
                    <div className = 'skill'>
                        <img src={vs} alt="" /> 
                        <h2>Visual Studio</h2>  
                        <small>Test</small>       
                    </div>
                    <div className = 'skill'>
                        <img src={pg} alt="" /> 
                        <h2>PostgreSQL</h2>  
                        <small>Test</small>       
                    </div>
                    <div className = 'skill'>
                        <img src={mongo} alt="" /> 
                        <h2>MongoDB</h2>   
                        <small>Test</small>      
                    </div>
                    <div className = 'skill'>
                        <img src={microsoft} alt="" /> 
                        <h2>Microsoft Services</h2>
                        <small>Test</small>         
                    </div>
                </div>
                <div className='footer'>
                    <Footer/>
                </div>
            </div>
        </>
    )
}

export default HomeSpanish;