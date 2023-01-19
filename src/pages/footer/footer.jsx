import React from 'react'
import '../footer/footer.css'
import {SiFacebook} from 'react-icons/si'
import {GrInstagram} from 'react-icons/gr'
import {FaTiktok} from 'react-icons/fa'

function Footer() {
  return (
    <footer>
        <div className='connect'>
            <SiFacebook className='sc_icon'/>
            <GrInstagram className='sc_icon'/>
            <FaTiktok className='sc_icon'/>
        </div>
        <div className='help'>
            <p>Info</p>
            <p>Support</p>
            <p>Marketing</p>
        </div>
        <div className='copyright'>
            <p>Terms of Use</p>
            <p>Copyright © 2023</p>
        </div>
    </footer>
  )
}

export default Footer