import React from 'react';
import { Link, NavLink } from 'react-router-dom';

class Navbar extends React.Component{

  constructor(){
    super()
  }


  renderLoginSignup() {
    return (
      <ul className="nav navbar-nav navbar-right">
        <li>
         <NavLink to="/signup" activeClassName="active">signup</NavLink>
        </li>
        <li>
          <NavLink to="/login" activeClassName="active">login</NavLink>
        </li>
      </ul>
    );
  }

  render() {
    return (
       <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target=".navbar-collapse">
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <Link className="navbar-brand" to="/"><img src="/images/barrelofmonkeys.jpeg" /></Link>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li>
                <NavLink to="/" activeClassName="active">Home</NavLink>
              </li>
              <li>
                <NavLink to="/edit" activeClassName="active">Edit rosters</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
export default Navbar;
