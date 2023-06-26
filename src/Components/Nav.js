import React from 'react';
import './Nav.css'

export default function Nav() {
  return (
    <nav className='navbar'>
        <a className='navitem' href='/about'>About Me</a>
        <a className='navitem' href='/'>Home</a>
        <a className='navitem' href='/contact'>Contact Me</a>
    </nav>
  )
}
