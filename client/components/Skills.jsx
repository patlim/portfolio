import React, { Component } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Skills = () => {
  return ( 
    <Row>
      <Col>
        <p>
          <b>Skills</b><br/>
          HTML<br/>
          CSS<br/>
          Javascript<br/>
          RESTful APIs<br/>
          React<br/>
          Redux
        </p>
      </Col>
      <Col>
        <p>
          <b>Education</b><br/>
          Enspiral Dev Academy<br/>
          University of Auckland<br/>
          <em>Bachelor of Science - Computer Science Major</em>
        </p>
      </Col>
    </Row>
   );
}
 
export default Skills;