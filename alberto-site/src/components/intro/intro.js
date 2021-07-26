import React, { Component } from 'react';
import Typing from 'react-typing-animation';

export default class intro extends Component {
    render(){
        return(
            <section id="intro">   
           
                <div className="intro-overlay" />	
                <div className="intro-content">
                    <div className="row">
                    <div className="col-twelve">
                        <Typing speed={30}>
                         <h5>Hello, World.</h5>
                         <h1>I'm Alberto Chaves<span className="cursorBlink">_</span></h1>
                        </Typing>
                        <p className="intro-position">
                            <span>Java &amp; React Developer</span>
                        </p>
                        <a className="button stroke smoothscroll" href="#about" title>More About Me</a>
                    </div>  
                    </div>   		 		
                </div> 
                <ul className="intro-social">        
                    <li><a href="https://www.linkedin.com/in/alberto-chaves" target="_blank"><i className="fab fa-linkedin" /></a></li>
                    <li><a href="https://github.com/albertochaves-dev" target="_blank"><i className="fab fa-github-alt" /></a></li>
                    <li><a href="https://stackoverflow.com/users/14605495/alberto-chaves" target="_blank"><i className="fab fa-stack-overflow" /></a></li>
                </ul>    	
            </section>
        )
    }
}