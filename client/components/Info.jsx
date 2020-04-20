import React from "react"

import Image from "react-bootstrap/Image"

const Info = () => {
  return (
    <div className="info affix d-flex h-100">
      <div className="align-self-center text-white mx-auto">
        <Image style={{ width: "100px" }} src="/headshot.jpg" roundedCircle />
        {" "}
        <h1 className="text-muted mb-0">Patrick Lim</h1>
        <h3 className="text-dark">Full Stack Web Developer</h3>
        <div className="m-2">
          <a href="https://github.com/patlim"><img className="m-1" src="/github.png" style={{ width: "30px" }}/></a>
          <a href="https://www.linkedin.com/in/nzplim/"><img className="m-1" src="/linkedin.png" style={{ width: "30px" }}/></a>
          <a href="https://www.behance.net/patlim"><img className="m-1" src="/behance.png" style={{ width: "30px" }}/></a>
          <a href="mailto:impatlim@gmail.com"><img className="m-1" src="/mail.png" style={{ width: "30px" }}/></a>
          <a href="/cv.pdf"><img className="m-1" src="/resume.png" style={{ width: "30px" }}/></a>
        </div>
      </div>
    </div>
  )
}

export default Info
