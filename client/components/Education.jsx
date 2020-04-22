import React, { Component } from "react"

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const Education = () => {
  return (
    <div className="affix d-flex" id="education">
      <div className="w-50 text-light align-self-center mx-auto">
        <div className="education mb-5">
        <h2>Education</h2>
        <p>
          Enspiral Dev Academy
          <br />
          University of Auckland
          <br />
          <em>BSc Majoring in Computer Science</em>
        </p>
        </div>
        <div className="design my-5">
        <h2>Design Background</h2>
        <p>
          <em>Proficiency with tools</em>
          <br />
          Adobe Illustrator
          <br />
          Adobe Photoshop
          <br />
          Sketch
          <br />
          Invision
        </p>
        </div>
      </div>
    </div>
  )
}

export default Education
