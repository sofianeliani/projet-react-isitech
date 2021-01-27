/* import react */
import React from 'react';
import './navbar.scss'

import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
class Navbar extends React.Component{

  constructor(props){
    super(props)

  }

  render(){
    return (
    // <div className="Navbar">
    //   <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    //   <div className="container-fluid">
    //     <Link to="/" className="navbar-brand">Gagnant App</Link>
    //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarNavDropdown">
    //       <ul className="navbar-nav">
    //         <li className="nav-item">
    //         <Link to="/content" className="nav-link active">Home</Link>
    //         </li>
    //         <li className="nav-item">
    //         <Link to="/payment-methods" className="nav-link">Les avis</Link>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#">Pricing</a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    //   </nav>
    // </div>
    <nav class="nav">
      <div class="link">
        <Link to="/" className="nav-link">Accueil</Link>
      </div>
      <div class="link">
        <Link to="/bonus" className="nav-link">Bonus</Link>
      </div>
      <div class="link">
        <Link to="/payment-methods" className="nav-link">Les avis</Link>
      </div>
      <div class="link">
        <Link to="/login" className="nav-link">Login</Link>
      </div>
      <div class="link">
        <Link to="/payment-methods" className="nav-link">link</Link>
      </div>
    </nav>
    );
  }
}

export default Navbar;
