import React from "react"
import Image from "react-bootstrap/Image"

const Info = () => {
  return (
    <>
    <div className="info affix d-flex h-100">
      <div className="align-self-center text-white mx-auto">
        {/* <Image style={{ width: "80px" }} src="/headshot.jpg" roundedCircle /> */}
        {" "}
        <h1 className="text-white mb-0">Patrick Lim</h1>
        <p className="text-muted">Full Stack Web Developer</p>
        <div className="iconContainer">
          <a className="pr-1" href="https://github.com/patlim" target="_blank"><i className="icon text-muted fab fa-2x fa-github"></i></a>{"  "}
          <a className="px-1" href="https://www.linkedin.com/in/nzplim/" target="_blank"><i className="icon text-muted fab fa-2x fa-linkedin"></i></a>{"  "}
          <a className="px-1" href="https://www.behance.net/patlim" target="_blank"><i className="icon text-muted fab fa-2x fa-behance-square"></i></a>{"  "}
          <a className="pl-1" href="mailto:impatlim@gmail.com" target="_blank"><i className="icon text-muted far fa-2x fa-envelope"></i></a>
        </div>
        <a href="/cv.pdf">View resume</a>
      </div>
    </div>
    </>
  )
}

export default Info
