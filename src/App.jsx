import { useState, useEffect } from 'react';
import Header from './components/1-header/Header.jsx';
import Hero from './components/2-hero/Hero.jsx'; 
import Main from './components/3-main/Main.jsx'; 
import Contact from './components/4-contact/Contact.jsx';
import Footer from './components/5-footer/Footer.jsx';


function App() {

  // Scroll to top functionality
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200){
          setscrollButton(true);
      }else{
          setscrollButton(false);
      }
    })
  }, []);

  const [ scrollButton, setscrollButton ] = useState(false);


  return (
    <div id="up"className='container'>
      <Header />
      <Hero />
      <div className='divider' />
      <Main />
      <div className='divider' />
      <Contact />
      <div className='divider' />
      <Footer />

        <a style={{opacity: scrollButton ? 1 : 0, transition: "1.5s"}} href="#up">
           <button className='icon-circle-up circle'>
           </button>
        </a>
  
    </div>
  )
}

export default App
