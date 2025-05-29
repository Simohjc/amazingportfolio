import React from 'react'
import './Contact.css'; // Assuming you have a CSS file for styling

const Contact = () => {
  return (
    <section className='contact-us'>
       <h1 className='title'>
        <span className='icon-envelope'></span>
        Contact Us
       </h1>
       <p className='sub'><b style={{color:"#00b4d8"}}>Let’s Connect!</b> Whether you’re interested in collaborating, 
              have a project in mind, or just want to say hello, I’d love to hear from you. 
                 Feel free to reach out through the form below or connect with me on social media.
                    I’m always open to new opportunities and meaningful conversations.
        </p>
        <div className=' main-form flex'>
          <form className='form-section'>
            <div className='first-email'>
               <label htmlFor='email'>Email Address:</label>
               <input type='email' placeholder='Enter your email' required name="" id='email' />
            </div>
            <div className='flex second-message'>
               <label htmlFor='message'>Your Message:</label>
               <textarea placeholder='Type your message here' required name="" id='message'></textarea>
            </div>
            <button className='submit'>Submit</button>
          </form>
          <div className='border animation'>animation</div>
        </div>
    </section>
  )
}

export default Contact;
