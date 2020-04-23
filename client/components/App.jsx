import React from "react"

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import Info from "./Info"
import Main from "./Main"
import Nav from "./Nav"
import Contact from './Contact'

function App() {
  return (
    <div>
      <Nav />
      <Row>
        <Col sm={4} style={{ backgroundColor: "#2A424D", height: "100vh" }}>
          <Info />
        </Col>
        <Col className="bg-muted" sm={8} style={{ backgroundColor: "#548399", height: "100vh" }}>
          <Main />
        </Col>
      </Row>
      <Contact />
    </div>
  )
}

export default App
