import React from "react"

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import Info from "./Info"
import Main from "./Main"
import Nav from "./Nav"

function App() {
  return (
    <>
      <Nav />
      <Row>
        <Col sm={5} style={{ backgroundColor: "#202326", height: "100vh" }}>
          <Info />
        </Col>
        <Col sm={7} style={{ backgroundColor: "#3D4146", height: "100vh" }}>
          <Main />
        </Col>
      </Row>
    </>
  )
}

export default App
