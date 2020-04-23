import React from "react"

import Socials from "./Socials"

const Info = () => {
  return (
    <>
    <div className="info affix d-flex h-100">
      <div className="align-self-center text-white mx-auto">
        {/* <Image style={{ width: "80px" }} src="/headshot.jpg" roundedCircle /> */}
        {" "}
        <h1 className="mb-0" style={{fontFamily: 'helvetica-bold'}}>Patrick Lim</h1>
        <p >Full Stack Web Developer</p>
        <a href="/cv.pdf">View resume</a>
      </div>
    </div>
    </>
  )
}

export default Info
