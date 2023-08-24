import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className='main-navbar-div'>
      <div className='navbar'>
      <div className='inner-navbar'>
        <h1 className='logo'>Lookscout</h1>
        <nav>
          <ul>
            <li>Home</li>
            <li>Our Products</li>
            <li>Resources</li>
            <li>Contacts</li>

          </ul>
        </nav>
      </div>

      <div className='btn'>
        <button className='btn-secondary'>Sign Up</button>
        <button className='btn-primary'>Log In</button>
      </div>

      <button className='mobile-menu'>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M4 6l16 0"></path>
          <path d="M4 12l16 0"></path>
          <path d="M4 18l16 0"></path>
        </svg>
      </button>
    </div>
    </div>
  )
}
