import React, { useEffect } from 'react'
import './Contact.css'; // Assuming you have a CSS file for styling
import { useForm, ValidationError } from '@formspree/react'; // Make sure to install @formspree/react
import { useRef } from 'react'; // Import useRef for email reference
import { DotLottieReact } from '@lottiefiles/dotlottie-react';




const Contact = () => {
  const [state, handleSubmit] = useForm("xblonbev");

  const emailRef = useRef(null);
  const messageRef = useRef (null);

   // This effect clears the input fields when the form submission is successful

useEffect(() => {
  if (state.succeeded){
    emailRef.current.value = "";
    messageRef.current.value = "";
  }
}, [state.succeeded]);

 
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
        <div className='flex main-form'>
          <form onSubmit={handleSubmit} className='form-section'>
            <div className='first-email'>
               <label htmlFor='email'>Email Address:</label>
               <input autoComplete='off' type='email' placeholder='Enter your email' required name="email" id='email' ref={emailRef} />
               <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
               />
            </div>
            <div className='flex second-message'>
               <label htmlFor='message'>Your Message:</label>
               <textarea placeholder='Type your message here' required name="message" id='message' ref={messageRef}></textarea>
               <ValidationError 
                 prefix="Message" 
                 field="message"
                  errors={state.errors}
               />
            </div>
            <button className='submit' type='submit' disabled={state.submitting}>
              {state.submitting ? "submitting..." : "Submit"}
            </button>
            {state.succeeded && (
                <p className='message-success flex'>
                    <DotLottieReact
                        src="src/animation/em.json"
                         loop={false}
                         autoplay
                         style={{height: '100px' }}
                    />
                  Thank you for reaching out!
                 Your message has been successfully sent. 
               I’ll get back to you as soon as possible. In the meantime, 
               feel free to explore more of my work!</p>
              )}
          </form>
          <div   className='animation'>
          <DotLottieReact
            src="src/animation/em1.json"
            loop
            autoplay
            style={{ height: '20rem', width: '30rem'}}
          />
          </div>
        </div>
    </section>
  )
}

export default Contact;

