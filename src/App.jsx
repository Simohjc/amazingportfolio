import Header from './components/1-header/Header.jsx';
import Hero from './components/2-hero/Hero.jsx'; 
import Main from './components/3-main/Main.jsx'; 
import Contact from './components/4-contact/Contact.jsx';
import Footer from './components/5-footer/Footer.jsx';


function App() {


  return (
    <div className='container'>
      <Header />
      <div className='divider' />
      <Hero />
      <div className='divider' />
      <Main />
      <div className='divider' />
      <Contact />
      <div className='divider' />
      <Footer />
    </div>
  )
}

export default App
