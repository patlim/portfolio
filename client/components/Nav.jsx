import React, { Component } from "react"

import Button from 'react-bootstrap/Button'

const Nav = () => (
  <div style={{display:'inline', position: 'fixed', transform: 'rotate(90deg)', transformOrigin: 'top left', top: -20, right: -310, zIndex: 1}}>
    <ul style={{display:'flex', justifyContent: 'space-around', listStyle: 'none'}}>
      <li className='nav-item px-2 active'>
        <a className="text-light" href='#projects' variant="outline-secondary" >Projects</a>
      </li>
      <li className='nav-item px-2' >
        <a className="text-light" href='#attributes' variant="outline-secondary" >Skills + Education</a>
      </li>
      <li className='nav-item px-2'>
        <a className="text-light" href='#contact' variant="outline-secondary" >Contact</a>
      </li>
    </ul>
  </div>
)

export default Nav
