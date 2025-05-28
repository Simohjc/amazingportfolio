import './Main.css'; // Assuming you have a CSS file for styling

const Main = () => {
  return (
    <main className='flex'>
      <section className='left-section flex'>
             <button className='active'>All Projects</button>
             <button>HTML & CSS</button>
             <button>JavaScript</button>
             <button>React & MUI</button>
             <button>Node & Express</button>
      </section>
      <section className='right-section flex'>

              {["aa", "bb", "cc", "dd", "ff", "gg", "ss","ll"].map((item) => (
                  <article  key={item} className='card'>
                   <img src='./ecommerce.png' alt="ecommerce" width={266} className='ecommerce-img' />
                   <div className='box' style={{width:"266px"}}>
                      <h1 className='title'>E-Commerce Website</h1>
                      <p className='subtitle'>A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.</p>
                      <div className='flex icons'>
                       <div className='flex' style={{gap: "11px"}}>
                         <div className='icon-link'></div>
                         <div className='icon-github'></div>
                       </div>
                       <a href='hhhh' className='link flex'>
                         more 
                         <span style={{alignSelf:"end"}} className='icon-arrow-right'></span>
                       </a>
                      </div>
                   </div>
                 </article>
              ))}
      </section>
    </main>

  )
}

export default Main;
