import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <div style={{color:'white'}}>
      <p className='contact'>Want to connect<br/>with me!</p>
      <p className='message'>Message me on <a style={{padding:0, textDecoration:'underline',color:'rgb(10, 102, 194)'}} href='https://www.linkedin.com/in/prashant-singh-nigam/' alt='Search Prashant Nigam on Linkedin'>Linkedin</a> or email me at <br/><a style={{padding:0,textDecoration:'underline'}} href='mailto:nigamp72@gmail.com'>nigamp72@gmail.com.</a></p>
    </div>
  )
}
