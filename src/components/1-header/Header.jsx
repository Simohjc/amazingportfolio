import React, { use } from 'react';
import './Header.css'; // Assuming you have a CSS file for styling
import { useState } from 'react';

const Header = () => {
  const [showModel, setShowModel] = useState(false);
  return (
  
      <header className=' flex'>
             <button onClick={() => setShowModel(true)} className='menu icon-menu flex' />
            <div/>
            <nav>
          <ul className='flex'>
          <li><a href="">About</a></li>
          <li><a href="">Articles</a></li>
          <li><a href="">Projects</a></li>
          <li><a href="">Speaking</a></li>
          <li><a href="">Contact</a></li>
         </ul>
        </nav>
        <button className='moon flex'>
          <span className='icon-moon'></span>
        </button> 
       {showModel && (
          <div className='fixed'>
          <ul className='model'>
            <li><button className='icon-cross' onClick={() => {setShowModel(false)}} /></li>
            <li><a href="">About</a></li>
            <li><a href="">Articles</a></li>
            <li><a href="">Projects</a></li>
            <li><a href="">Speaking</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </div>
       )}
      </header>

  )
}

export default Header;
