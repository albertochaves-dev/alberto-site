import React, { Component } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default class header extends Component {
    render(){
        return(
            <header className="s-header">
                <div className="row s-header__nav-wrap">
                <nav className="s-header__nav">
                    <ul>
                        <li><AnchorLink href='#about'>About</AnchorLink></li>
                        <li><AnchorLink href='#resume'>Experience</AnchorLink></li>
                        <li><AnchorLink href='#education'>Education</AnchorLink></li>
                        <li><AnchorLink href='#contact'>Say Hello</AnchorLink></li>
                    </ul>
                </nav>
                </div> {/* end row */}
                <a className="s-header__menu-toggle" href="#0" title="Menu">
                <span className="s-header__menu-icon" />
                </a>
          </header>
        )
    }
}