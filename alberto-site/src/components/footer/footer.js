import React, {Component} from 'react'

export default class footer extends Component {
    render(){
        return(
        <footer className="s-footer">
            <div className="row">
                <div className="col-twelve tab-full pull-right social">
                <ul className="footer-social">        
                    <li><a href="https://www.linkedin.com/in/alberto-chaves" target="_blank"><i className="fab fa-linkedin" /></a></li>
                    <li><a href="https://github.com/albertochaves-dev" target="_blank"><i className="fab fa-github-alt" /></a></li>
                    <li><a href="https://stackoverflow.com/users/14605495/alberto-chaves" target="_blank"><i className="fab fa-stack-overflow" /></a></li>
                </ul> 
                </div>
                <div id="go-top">
                <a className="smoothscroll" title="Back to Top" href="#top"><i className="fa fa-long-arrow-up" /></a>
                </div>
            </div>  	
        </footer>
        )
    }
}