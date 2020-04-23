import React from 'react'
import Socials from './Socials'

const Contact = () => {
  return ( 
    <div className="contactContainer d-flex" style={{backgroundColor: '#548399'}} id='contact'>
      <div className="contactInfo p-5" style={{ position: 'relative', color: '#2A424D', height: "100vh", width: "100vw" }} >
        <h1 style={{fontFamily: 'helvetica-bold'}}>Get in touch</h1>
        <p>
          <b>Contact info</b>
          <br/>
          +64-21-162-8487
          <br/>
          impatlim@gmail.com
        </p>
        <div style={{position: 'absolute', bottom: 50, right: 50}}>
          <Socials className="text-white" />
        </div>
      </div>
    </div>
   )
}
 
export default Contact