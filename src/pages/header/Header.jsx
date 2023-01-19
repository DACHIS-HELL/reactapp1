import React from 'react'
import '../header/header.css'

function Header() {
  return (
    <header>
        <nav>
            <div className='logo'>Logo</div>
            <div className='min_components'>
                <li>
                    Home
                </li>
                <li>
                    About
                </li>
                <li>
                    Support
                </li>
            </div>
        </nav>
    </header>
  )
}

export default Header