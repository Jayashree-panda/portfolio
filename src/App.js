import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import About from './components/about/about';
import Resume from './components/resume/resume';
import Portfolio from './components/portfolio/portfolio';
import Testimonials from  './components/testimonials/testimonials';
import ContactUs from './components/contactus/contactus';
import Footer from './components/footer/footer';
import resumeData from './resumeData';
import contactData from './contactData';
import aboutData from './aboutData';
import skillsData from './skillsData';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData}/>
        <About aboutData={aboutData}/>
        <Resume skillsData={skillsData}/>
        <Portfolio />
        <Testimonials />
        <ContactUs contactData={contactData}/>
        <Footer />
        </div>
    );
  }
}

export default App;
