import React from "react"

import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

import { works } from "../../data/works"
import Skills from "./Skills"
import Education from "./Education"
  
const Main = () => {
  return (
    <div className="work h-100" style={{ overflowY: "scroll" }}>
      <div className="overflow-auto my-5">
        {works.map((work) => {
          return (
            <Card className="mx-auto mb-5" key={work.id} border="dark" style={{ width: "25rem" }}>
              <Card.Img variant="top" src="https://placeimg.com/300/150/any" />
              <Card.Body>
                <Card.Title>{work.title}</Card.Title>
                <Card.Text>{work.desc}</Card.Text>
                <Button variant="primary" size="sm" href={work.demoLink}>
                  Demo
                </Button>{" "}
                <Button variant="secondary" size="sm" href={work.githubLink}>
                  Github
                </Button>
              </Card.Body>
            </Card>
          )
        })}
        <br />
      </div>
      <Skills />
      <Education />
    </div>
  )
}

export default Main
