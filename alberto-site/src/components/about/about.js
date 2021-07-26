import React, { Component } from 'react'

export default class about extends Component{
    render(){
        return(
        <section id="about">  
            <div className="row section-intro">
                <div className="col-twelve">
                <h5>About</h5>
                <h1>Let me introduce myself.</h1>
                <div className="intro-info">
                    <img src="images/profile-pic.jpg" alt="Profile Picture" />
                    <p className="lead">I am a full stack remote developer based in Tarragona, Spain. I have 5 years of experience developing top-notch web applications from zero in Java, using the most modern technologies like Spring Boot, Hibernate, ElasticSearch and MongoDB.</p>
                </div>   			
                </div>   		
            </div> {/* /section-intro */}
            <div className="row about-content">
                <div className="col-twelve tab-full">
                <h3>Profile</h3>
                <p>I consider myself as a great problem solver, I also love to face new challenges every day.</p>
                <ul className="info-list">
                    <li>
                    <strong>Full name:</strong>
                    <span>Alberto Chaves</span>
                    </li>
                    <li>
                    <strong>Location:</strong>
                    <span>Tarragona, Catalonia, Spain</span>
                    </li>
                    <li>
                    <strong>I speak:</strong>
                    <span>English, Spanish and Catalan</span>
                    </li>
                    <li>
                    <strong>Current Job:</strong>
                    <span>Full stack Developer [Java &amp; React] @ Capgemini Engineering</span>
                    </li> 
                    <li>
                    <strong>Website:</strong>
                    <span><a href="https://github.com/albertochaves-dev">https://github.com/albertochaves-dev</a></span>
                    </li>
                    <li>
                    <strong>Email:</strong>
                    <span><a href="mailto:achavesherreros@gmail.com">achavesherreros@gmail.com</a></span>
                    </li>
                </ul>
                </div>
            </div>
            <div className="row button-section">
                <div className="col-twelve">
                <a href="#contact" title="Hire Me" className="button stroke smoothscroll">Hire Me</a>
                <a href="#" title="Download CV" className="button button-primary">Download CV</a>
                </div>   		
            </div>
        </section>
        )
    }
}