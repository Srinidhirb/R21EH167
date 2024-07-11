import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
 function Navbar() {
  return (
  
     <nav>
        <div className="leftnav">
        <h1>ProductStore</h1>

        </div>
        <div className="middlenav">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/service">Services</Link></li>
               
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/contact">Contact us</Link></li>
            
            </ul>
        </div>
        <div className="rightnav">
            <div className="button">Get a Free Shipping</div>
        </div>
    </nav>
  
  )
}
export default Navbar
