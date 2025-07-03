import React from 'react'
import HighlightText from './HighlightText'
import CTAButton from './CTAButton';
import Know_your_progress from "../../../assets/Images/Know_your_progress.png";
import Compare_with_others from "../../../assets/Images/Compare_with_others.svg";
import Plan_your_lessons from "../../../assets/Images/Plan_your_lessons.svg";


const LearningLanguageSection = () => {
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center mt-100">
      <div className="d-flex flex-column justify-content-center align-items-center w-100 w-lg-50">
        <div className="d-flex align-items-center justify-content-center fw-semibold">
          <h1>
            Your swiss knife for
            <HighlightText text={" learning any language"} />
          </h1>
        </div>
        <div className="d-flex align-items-center justify-content-center justify-content-sm-start language col-12 col-lg-8">
          <p>
            Using spin making learning multiple languages easy. with 20+
            languages realistic voice-over, progress tracking, custom schedule
            and more.
          </p>
        </div>
      </div>

      <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center mt-5 mt-lg-0">
        <img src={Know_your_progress} 
        alt="" 
        className="course-img-1" 
        />
        <img
          src={Compare_with_others}
          alt=""
          className="course-img-2"
        />
        <img
          src={Plan_your_lessons}
          alt=""
          className="course-img-3"
        />
      </div>
      <div className="w-10 mx-auto mb-5">
            <CTAButton active={true} linkto={"/signup"}>
              <div className="">Learn More</div>
            </CTAButton>
          </div>
    </div>
  );
}

export default LearningLanguageSection