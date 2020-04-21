import React from "react"

import Image from "react-bootstrap/Image"

const Info = () => {
  return (
    <div className="info affix d-flex h-100">
      <div className="align-self-center text-white mx-auto">
        <Image style={{ width: "80px" }} src="/headshot.jpg" roundedCircle />
        {" "}
        <h1 className="text-muted mb-0">Patrick Lim</h1>
        <p className="text-dark">Full Stack Web Developer</p>
        <div className="iconContainer m-2">
          <a href="https://github.com/patlim"><i className="icon text-muted fab fa-lg fa-github"></i></a>{"  "}
          <a href="https://www.linkedin.com/in/nzplim/"><i className="icon text-muted fab fa-lg fa-linkedin"></i></a>{"  "}
          <a href="https://www.behance.net/patlim"><i className="icon text-muted fab fa-lg fa-behance-square"></i></a>{"  "}
          <a href="mailto:impatlim@gmail.com"><i className="icon text-muted far fa-lg fa-envelope"></i></a>
        </div>
        <a href="/cv.pdf">View resume</a>
      </div>
    </div>
  )
}

export default Info
