import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css'

const Nav = () => (
  <section className='header'>
  <h1 className="logo">Math Magicians</h1>

  <ul className='navBar'>
    <li><Link to="/" className="">Home</Link></li>
    <li>|</li>
    <li><Link to="/Calculation" className="">Calculator</Link></li>
    <li>|</li>
    <li><Link to="/Quotes" className="">Quote</Link></li>
  </ul>
  </section>
);

export default Nav;