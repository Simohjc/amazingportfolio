import js from '@eslint/js';
import './Main.css'; // Assuming you have a CSS file for styling
import React, { useState } from 'react';

const allProjects = [
  {projectTitle: "Ecommerce-Platform", category:"nodeExpress", imgPath:"./ecommerce.png", alt:"Ecommerce Platform", id:1},
  {projectTitle: "Portfolio", category:"htmlCss", imgPath:"./portfolio.png", alt:"Portfolio", id:2},
  {projectTitle: "LandingPage Restaurant", category:"javascript", imgPath:"./landing.png", alt:"Landing Page Restaurant", id:3},
  {projectTitle: "Rental Car Platform", category:"htmlCss", imgPath:"./rental.jpg", alt:"Rental Car Platform", id:4},
  {projectTitle: "Dashboard App", category:"react", imgPath:"./dash.jpg", alt:"Dashboard App", id:5},
  {projectTitle: "Calories Count App", category:"nodeExpress", imgPath:"./calories.jpg", alt:"Calories Count App", id:6},
  {projectTitle: "Salary management", category:"react", imgPath:"./salary.jpg", alt:"Salary Management", id:7},
  {projectTitle: "Automated Switch Light", category:"react", imgPath:"./light.jpg", alt:"Automated Switch Home Light", id:8},
]

const Main = () => {
  const [currentActive, setCurrentActive] = useState("all");
  const [arr, setArr] = useState(allProjects);
  return (
    <main className='flex'>
      <section className='left-section flex'>
             <button onClick={() => {setCurrentActive("all");
                                      // Reset to show all projects
                                     setArr(allProjects);
                                     }} className={currentActive === "all" ? "active" : "null"}>All Projects</button>
             <button onClick={() => {setCurrentActive("htmlCss");
                                      const htmlArr = allProjects.filter((item) => { return item.category === "htmlCss"})
                                     setArr(htmlArr);
                                     }} className={currentActive === "htmlCss" ? "active" : " "}>HTML & CSS</button>
             <button onClick={() => {setCurrentActive("js"); 
                                      const jsArr = allProjects.filter((item) => { return item.category === "javascript"})
                                     setArr(jsArr);
                                     }} className={currentActive === "js" ? "active" : " "}>JavaScript</button>
             <button onClick={() => {setCurrentActive("react");
                                      const reactArr = allProjects.filter((item) => { return item.category === "react"})
                                     setArr(reactArr)}} className={currentActive === "react" ? "active" : " "}>React & MUI</button>
             <button onClick={() => {setCurrentActive("node");
                                      const nodeArr = allProjects.filter((item) => { return item.category === "nodeExpress"})
                                     setArr(nodeArr)}} className={currentActive === "node" ? "active" : " "}>Node & Express</button>
      </section>
      <section className='right-section flex'>

              {arr.map((item) => (
                  <article  key={item.id} className='card'>
                   <img src={item.imgPath} alt={item.alt}   />
                   <div className='box' style={{width:"266px"}}>
                      <h1 className='title'>{item.projectTitle}</h1>
                      <p className='subtitle'>Fully coded custom platform, please click on the lick and check it out</p>
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
