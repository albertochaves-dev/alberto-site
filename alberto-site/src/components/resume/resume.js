import React, { Component } from 'react'

export default class resume extends Component {
    render(){
        return(
        <section id="resume" className="grey-section">
            <div className="row section-intro">
                <div className="col-twelve">
                <h5>Resume</h5>
                <h1>More of my credentials.</h1>
                <p className="lead">I have been working on multiple and interesting web applications during my almost 5 years of experience.</p>
                </div>   		
            </div> {/* /section-intro*/} 
            <div className="row resume-timeline">
                <div className="col-twelve resume-header">
                <h2>Work Experience</h2>
                </div> {/* /resume-header */}
                <div className="col-twelve">
                <div className="timeline-wrap">
                    <div className="timeline-block">
                    <div className="timeline-ico">
                        <i className="fa fa-graduation-cap" />
                    </div>
                    <div className="timeline-header">
                        <h3>Backend developer</h3>
                        <p>Nov 2020 - Present</p>
                    </div>
                    <div className="timeline-content">
                        <h4>Capgemini Engineering</h4>
                        <p>Development of critical projects for the Generalitat de Catalunya in the policy section.</p>
                        <p>Use of microservices architecture in Java 11 with Spring Boot, Hibernate, ElasticSearch and MongoDB, along with Docker and OpenShift.</p>
                    </div>
                    </div> {/* /timeline-block */}
                    <div className="timeline-block">
                    <div className="timeline-ico">
                        <i className="fa fa-graduation-cap" />
                    </div>
                    <div className="timeline-header">
                        <h3>Full-stack developer</h3>
                        <p>Jan 2019 - Nov 2020</p>
                    </div>
                    <div className="timeline-content">
                        <h4>Atmira</h4>
                        <p>Working on multiple applications (tax, payment gateways, legal, internal tools, etc.) of an important banking client.</p>
                        <p>Mentoring and task management of the team.</p>
                        <p>Close relationship with the client, carrying out direct communication, consulting requirements, receiving feedback and proposing new improvements.</p>
                        <p>Writing of technical, functional and testing documents in evolutionary and corrective developments. Backend development in Java and frontend in JSP, ReactJS and Angular.</p>
                        <p>Prevention, identification and correction of vulnerabilities.</p>
                        <p>Experience in making hour estimations.</p>
                        <p>Use of agile methodologies.</p>
                    </div>
                    </div> {/* /timeline-block */}
                    <div className="timeline-block">
                    <div className="timeline-ico">
                        <i className="fa fa-graduation-cap" />
                    </div>
                    <div className="timeline-header">
                        <h3>Full-stack developer</h3>
                        <p>May 2017 - Jan 2019</p>
                    </div>
                    <div className="timeline-content">
                        <h4>Viewnext (IBM group)</h4>
                        <p>Development of new featuresand bug fixing in applications belonging to the Generalitat de Catalunya.</p>
                    </div>
                    </div> {/* /timeline-block */}
                    <div className="timeline-block">
                    <div className="timeline-ico">
                        <i className="fa fa-graduation-cap" />
                    </div>
                    <div className="timeline-header">
                        <h3>Full-stack developer (Internship)</h3>
                        <p>Nov 2016 - May 2017</p>
                    </div>
                    <div className="timeline-content">
                        <h4>Viewnext (IBM group)</h4>
                        <p>Migration to Java of an internal tool based on calculating hourly rates.</p>
                    </div>
                    </div> {/* /timeline-block */}
                </div> {/* /timeline-wrap */}   			
                </div> {/* /col-twelve */}
            </div> {/* /resume-timeline */}
            <div id="education" className="row resume-timeline">
                <div className="col-twelve resume-header">
                <h2>Education</h2>
                </div> {/* /resume-header */}
                <div className="col-twelve">
                <div className="timeline-wrap">
                    <div className="timeline-block">
                    <div className="timeline-ico">
                        <i className="fa fa-briefcase" />
                    </div>
                    <div className="timeline-header">
                        <h3>Bachelor Degree</h3>
                        <p>Set 2020 - Present</p>
                    </div>
                    <div className="timeline-content">
                        <h4>Open University of Catalonia (UOC)</h4>
                        <p>Studying Software Engineering.</p>
                    </div>
                    </div> {/* /timeline-block */}
                    <div className="timeline-block">
                    <div className="timeline-ico">
                        <i className="fa fa-briefcase" />
                    </div>
                    <div className="timeline-header">
                        <h3>Advanced vocational training</h3>
                        <p>Set 2015 - May 2017</p>
                    </div>
                    <div className="timeline-content">
                        <h4>Vidal i Barraquer Institute</h4>
                        <p>Certificate of Multiplatform App Development.</p>
                    </div>
                    </div> {/* /timeline-block */}
                </div> {/* /timeline-wrap */}   			
                </div> {/* /col-twelve */}
            </div> {/* /resume-timeline */}
        </section> 
        )
    }
}