import React from 'react'
import TimeLineImage from "../../../assets/Images/TimelineImage.png"
import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg";

const TimelineSection = () => {
    const TimeLine = [
        {
          Logo: Logo1,
          Heading: "Leadership",
          Description: "Fully committed to the success company",
        },
        {
          Logo: Logo2,
          Heading: "Responsibility",
          Description: "Students will always be our top priority",
        },
        {
          Logo: Logo3,
          Heading: "Flexibility",
          Description: "The ability to switch is an important skills",
        },
        {
          Logo: Logo4,
          Heading: "Solve the problem",
          Description: "Code your way to a solution",
        },
      ];

  return (
    <div className="container">
      <div className="d-flex flex-column flex-lg-row gap-3 align-items-center w-100">
        <div className="d-flex flex-column gap-5 w-100" style={{ width: "40%" }}>
          {TimeLine.map((ele, idx) => {
            const isLast = TimeLine.length - 1 === idx;

            return (
              <div
                className="d-flex flex-row w-lg-100 gap-3 ms-5 position-relative"
                key={idx}
              >
                {/* Icon + Line Container */}
                <div
                  className="logo-icon d-flex flex-column align-items-center position-relative mt-1"
                  style={{ minHeight: "60px" }}
                >
                  {/* Icon */}
                  <img
                    src={ele.Logo}
                    alt="Logo"
                    style={{ width: "32px", height: "32px", zIndex: 1 }}
                  />

                  {!isLast && (
                    <div
                      className="position-absolute border-start border border-dotted"
                      style={{
                        top: "46px", // Push down slightly for top spacing
                        height: "calc(100% - 16px)", // Reduce total height for bottom space
                        width: "2px",
                        borderColor: "#E6E6E6",
                      }}
                    ></div>
                  )}
                </div>

                {/* Text Content */}
                <div className='d-flex align-items-center justify-content-center mt-0'>
                <div className="d-flex flex-column mx-5">
                  <h4>{ele.Heading}</h4>
                  <p>{ele.Description}</p>
                </div>
              </div>
              </div>
            );
          })}
        </div>
        <div className="timeline-img">
          <img src={TimeLineImage} className="" alt="" />

        </div>
      </div>
    </div>
  );
}

export default TimelineSection