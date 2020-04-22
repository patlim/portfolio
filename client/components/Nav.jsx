import React, { Component } from "react"

import Button from 'react-bootstrap/Button'

const Nav = () => (
  <div style={{display:'inline', position: 'fixed', transform: 'rotate(90deg)', transformOrigin: 'top left', top: -20, right: -310, zIndex: 1}}>
    <ul style={{display:'flex', justifyContent: 'space-around', listStyle: 'none'}}>
      <li className='px-2 active'>
        <a href='#projects' variant="outline-secondary">Projects</a>
      </li>
      <li className='px-2' >
        <a href='#skills' variant="outline-secondary">Skills</a>
      </li>
      <li className='px-2'>
        <a href='#skills' variant="outline-secondary">Education</a>
      </li>
      <li className='px-2'>
        <a href='#skills' variant="outline-secondary">Contact</a>
      </li>
    </ul>
  </div>
)

export default Nav
