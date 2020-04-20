import React from "react"

import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"

const works = [
  {
    id: 0,
    title: "demo",
    desc: "demo-desc",
    img: "/",
    link: "/",
    github: "/",
  },
  {
    id: 1,
    title: "demo2",
    desc: "demo-desc2",
    img: "/",
    link: "/",
    github: "/",
  },
]

const Main = () => {
  return (
    <div className="work h-100" style={{ "overflowY": "scroll" }}>
      <div className="overflow-auto my-5">
          <Card className="mx-auto" style={{ width: "18rem" }}>
            <Card.Img variant="top" src="https://placeimg.com/300/150/any" />
            <Card.Body>
              <Card.Title>Sample</Card.Title>
              <Card.Text>Description</Card.Text>
              <Button variant="primary" size="sm" href="demolink">
                Demo
              </Button>{" "}
              <Button variant="secondary" size="sm" href="githubLink">
                Github
              </Button>
            </Card.Body>
          </Card>
          <br />
          <Card className="mx-auto" style={{ width: "18rem" }}>
            <Card.Img variant="top" src="https://placeimg.com/300/150/any" />
            <Card.Body>
              <Card.Title>Sample</Card.Title>
              <Card.Text>Description</Card.Text>
              <Button variant="primary" size="sm" href="demolink">
                Demo
              </Button>{" "}
              <Button variant="secondary" size="sm" href="githubLink">
                Github
              </Button>
            </Card.Body>
          </Card>
          <br />
          <Card className="mx-auto" style={{ width: "18rem" }}>
            <Card.Img variant="top" src="https://placeimg.com/300/150/any" />
            <Card.Body>
              <Card.Title>Sample</Card.Title>
              <Card.Text>Description</Card.Text>
              <Button variant="primary" size="sm" href="demolink">
                Demo
              </Button>{" "}
              <Button variant="secondary" size="sm" href="githubLink">
                Github
              </Button>
            </Card.Body>
          </Card>
      </div>
    </div>
  )
}

export default Main
