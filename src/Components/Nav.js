import React from 'react';
import { Outlet, Link } from "react-router-dom";
import './Nav.css'

export default function Nav() {
  return (
    <>
    <nav className='navbar'>
        <Link to='/about'>About Me</Link>
        <Link to='/'>Home</Link>
        <Link to='/contact'>Contact</Link>
    </nav>
    <Outlet/>
    </>
  )
}
