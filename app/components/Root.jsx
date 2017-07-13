import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

// export default class Root extends Component {
//   constructor() {
//     super()
//   }
//{ children }
  const Root = ({ children }) => (
    <div id="main" className="container-fluid">
      <Navbar />
      { children }
      <Footer />
    </div>
  )

  export default Root

  // render() {
  //   if (!this.state) { return null }

  //   // const {joke, answered} = this.state
  //   return (
  //     <div>
  //       <Router>
  //         <div id="main" className="container-fluid">
  //           <Navbar />
  //         </div>
  //       </Router>
  //     </div>
  //   )
  // }

