import React, { Component } from 'react';
import { Canvas, useFrame } from "react-three-fiber";
import Header from './components/header/header';
import Intro from  './components/intro/intro';
import About from './components/about/about';
import Resume from './components/resume/resume';
import Portfolio from './components/portfolio/portfolio';
import ContactUs from './components/contactme/contactme';
import Footer from './components/footer/footer';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Intro />
        <About />
        <Resume />
        {/*<Portfolio />*/}
        <ContactUs />
        <Footer />
      </div>
    );
  }
}export default App;