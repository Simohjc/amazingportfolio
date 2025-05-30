import React, { use, useEffect } from 'react';
import './Header.css'; // Assuming you have a CSS file for styling
import { useState } from 'react';

const Header = () => {
  const [showModel, setShowModel] = useState(false);
  const [theme, settheme] = useState(localStorage.getItem("currentMode") ?? "dark");
  useEffect(() => {
    if (theme ==="light"){
      document.body.classList.remove("dark");
      document.body.classList.add("light")
    }else {
      document.body.classList.remove("light");
      document.body.classList.add("dark")
    }
  }, [theme]);
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
        <div className='flex darkLight'>
          <p>Dark / Light</p>
        <button onClick={() => {
          //send value to local storage
          localStorage.setItem("currentMode", theme === "dark" ? 'light' : 'dark');


          //get value from local storage
          settheme(localStorage.getItem("currentMode"))
        }
        } className='moon flex'>
          {theme && (
          (theme === "dark") ? <span className='icon-sun1'></span> : <span className='icon-moon'></span>
          )}
        </button> 
        </div>
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
