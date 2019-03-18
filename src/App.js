import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Testimonials from  './components/Testimonials';
import ContactUs from './components/Contact';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Portfolio />
        <Resume />
        <Pricing />
        <ContactUs />
        <Footer />
      </div>
    );
  }
}

export default App;
