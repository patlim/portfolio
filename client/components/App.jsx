import React from "react"

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import Info from "./Info"
import Main from "./Main"

function App() {
  return (
    <>
      <Row>
        <Col style={{ backgroundColor: "#202326", height: "100vh" }}>
          <Info />
        </Col>
        <Col style={{ backgroundColor: "#3D4146", height: "100vh" }}>
          <Main />
        </Col>
      </Row>
    </>
  )
}

export default App
