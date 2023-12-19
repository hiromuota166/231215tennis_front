import React from 'react'
import '../styles/header.css'

const Header = () => {
  return (
    <div className='header_top'>
      <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <a href=""><li>Home</li></a>
            <a href=""><li>About</li></a>
            <a href=""><li>Info</li></a>
            <a href=""><li>Contact</li></a>
            <a href=""><li>Show me more</li></a>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header