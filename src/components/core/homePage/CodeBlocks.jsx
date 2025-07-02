import React from 'react'
import CTAButton from './CTAButton'
import { TypeAnimation } from "react-type-animation";

import { FaArrowRight } from "react-icons/fa";

const CodeBlocks = ({position, heading, subHeading, btn1, btn2, color, codeBlock, codeColor}) => {
  return (
    <div className={`d-flex ${position} justify-content-start my-5 gap-5`}>
      <div className="w-100 w-lg-50 d-flex flex-column gap-4">
  {heading}

  <div className="text-secondary fw-bold w-85 mt-n3">
    {subHeading}
  </div>
   {/* Button Group */}
        <div className="d-flex gap-3 mt-5">
          <CTAButton active={btn1.active} linkto={btn1.link}>
            <div className="d-flex align-items-center gap-2">
              {btn1.btnText}
              <FaArrowRight />
            </div>
          </CTAButton>
          <CTAButton active={btn2.active} linkto={btn2.link}>
            {btn2.btnText}
          </CTAButton>
</div>
</div>


<div
  className="w-100 d-flex flex-row py-3 position-relative text-muted code-border"
  style={{ fontSize: "13px", lineHeight: "25px", fontFamily: "monospace" }}
>
  {color}

  {/* Indexing */}
  <div
    className="text-end pe-2 d-flex flex-column justify-content-start"
    style={{
      width: "10%",
      userSelect: "none",
      fontWeight: "bold",
      color: "#9CA3AF",
    }}
  >
    {[...Array(11)].map((_, i) => (
  <div key={i} style={{ height: "25px" }}>
    {i + 1}
  </div>
))}
  </div>

  {/* Code block */}
  <div
    className={`fw-bold pe-1 ${codeColor}`}
    style={{
      width: "90%",
      whiteSpace: "pre-wrap",
      fontFamily: "monospace",
      lineHeight: "25px",
    }}
  >
    <TypeAnimation
      sequence={[codeBlock, 1000, ""]}
      cursor={true}
      repeat={Infinity}
      style={{
        display: "inline-block",
      }}
      omitDeletionAnimation={true}
    />
  </div>
</div>

    </div>

  )
}

export default CodeBlocks