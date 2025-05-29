import React from 'react'
import './Footer.css'; // Assuming you have a CSS file for styling

const Footer = () => {
  return (
    <footer className='flex'>
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Projects</a></li>
        <li><a href="">Contact</a></li>
      </ul>
      <p>&copy; 2025 Mohamed Elkhair. All rights reserved.</p>
    </footer>
  )
}

export default Footer;
