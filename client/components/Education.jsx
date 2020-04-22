import React, { Component } from "react"

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const Education = () => {
  return (
    <div className="affix d-flex">
      <div className="w-75 skills align-self-center mx-auto">
        <div className="education mb-5">
        <h2 className="text-white">Education</h2>
        <p className="text-light">
          Enspiral Dev Academy
          <br />
          University of Auckland
          <br />
          <em>BSc Majoring in Computer Science</em>
        </p>
        </div>
        <div className="design my-5">
        <h2 className="text-white">Design Background</h2>
        <p className="text-light">
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
