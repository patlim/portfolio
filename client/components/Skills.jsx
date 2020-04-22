import React, { Component } from "react"

import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

const Skills = () => {
  return (
    <div className="affix d-flex my-5">
      <Row className="w-75 skills align-self-center mx-auto">
        <Col className='px-0'>
          <h2 className="text-white">Skills</h2>
          <p className="text-light">
            HTML
            <br />
            CSS
            <br />
            Javascript
            <br />
            RESTful APIs
          </p>
        </Col>
        <Col className='px-0'>
          <p className="text-light">
            <br /><br/>
            React
            <br />
            Redux
            <br />
            Node.js
          </p>
        </Col>
      </Row>
    </div>
  )
}

export default Skills
