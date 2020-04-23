import React from "react"

const Attributes = () => {
  return (
    <div className="affix d-flex my-5" id="attributes">
      <div className="attributes align-self-center mx-auto"  style={{ color:"#2A424D", height: "100vh", width: "30rem" }}>
        <div className="skills my-5">
        <h2>Skills</h2>
        <p>
          HTML
          <br />
          CSS
          <br />
          Javascript
          <br />
          RESTful APIs
          <br />
          React
          <br />
          Redux
          <br />
          Node.js
        </p>
        </div>
        <div className="skills my-5">
        <h2>Education</h2>
        <p>
          University of Auckland
          <br />
          <em>BSc Majoring in Computer Science</em>
          <br />
          <br />
          Enspiral Dev Academy
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

export default Attributes
