import React, { Component } from "react"
import request from "superagent";

import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

import Attributes from "./Attributes"

const githubApi = 'https://api.github.com/users/patlim/repos'
class Main extends React.Component {
  state = {
    works: []
  }

  componentDidMount() {
    return request.get(githubApi)
      .then(res => this.setState({works: res.body}))
  }

  render() {
    return (
      <div className="work h-100" style={{overflowY: "scroll", scrollBehavior: 'smooth'}}>
        <div className="overflow-auto my-5" id="projects">
          {this.state.works.map((work) => {
            return (
              <Card
                className="mx-auto mb-5 border-0 text-white"
                key={work.id}
                style={{ width: "30rem", backgroundColor:'#2A424D' }}
              >
                <Card.Img
                  variant="top"
                  src="https://placeimg.com/450/150/any"
                />
                <Card.Body>
                  <Card.Title>{work.name}</Card.Title>
                  <Card.Text>{work.description}</Card.Text>
                  <Button className="btn-block" variant="primary" size="sm" target="_blank" href='#'>
                    Demo
                  </Button>{" "}
                  <Button className="btn-block" variant="secondary" size="sm" target="_blank" href={work.html_url}>
                    Github
                  </Button>
                </Card.Body>
              </Card>
            )
          })}
          <br />
        </div>
        <Attributes />
      </div>
    )
  }
}

export default Main
