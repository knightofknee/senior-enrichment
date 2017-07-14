import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

  const Root = ({ children }) => (
    <div id="main" className="container-fluid">
      <Navbar className='navbar'/>
      { children }
      <Footer />
    </div>
  )

  export default Root

