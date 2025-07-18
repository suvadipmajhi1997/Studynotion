// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import bannerVideo from '../assets/Images/banner.mp4'
import HighlightText from '../components/core/homePage/HighlightText';
import CTAButton from '../components/core/homePage/CTAButton';
import CodeBlocks from '../components/core/homePage/CodeBlocks';
import TimelineSection from '../components/core/homePage/TimelineSection';
import LearningLanguageSection from '../components/core/homePage/LearningLanguageSection';
import instructorImg from '../assets/Images/Instructor.png'
import ExpolreMore from '../components/core/homePage/ExpolreMore';
import ReviewSlider from '../components/ReviewSlider';

const Home = () => {
  return (
    <div>
      <div className="container">
        {/* section 1 */}
        <div className="w-11-12">
          <Link to={"signup"} className="text-decoration-none">
            <div className="button">
              <div className="d-flex flex-row align-items-center p-2 btn-items">
                <p className="m-0">Become an Instructor</p>
                <FaArrowRight />
              </div>
            </div>
          </Link>

          <div className="content">
            <div className="content-items ">
              <h1 className='text-start text-lg-center'>
                Empower Your Future with
                <HighlightText text={"Coding Skills "} />
              </h1>
              <p className='text-start text-lg-center'>
                With our online coding courses, you can learn at your own pace,
                from anywhere in the world, and get access to a wealth of
                resources, including hands-on projects, quizzes, and
                personalized feedback from instructors.
              </p>
            </div>
          </div>

          <div className="d-flex flex-row gap-4 mt-4 hover:transition-all scale-0.95">
            <CTAButton active={true} linkto={"/signup"}>
              Learn More
            </CTAButton>

            <CTAButton active={false} linkto={"/login"}>
              Book a Demo
            </CTAButton>
          </div>

          {/* Video */}
          <div className="my-5 mx-3 custom-shadow">
            <video className="custom-video-shadow" muted loop autoPlay>
              <source src={bannerVideo} type="video/mp4" />
            </video>
          </div>

          {/* Code Section 1  */}

          <div className="">
            <CodeBlocks
              position={"d-flex flex-column flex-lg-row"}
              heading={
                <div className="display-5 fw-semibold">
                  <h1>
                    Unlock your
                    <HighlightText text={" coding potential"} /> with our online
                    courses.
                  </h1>
                </div>
              }
              subHeading={
                "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
              }
              btn1={{
                btnText: "Try it Yourself",
                link: "/signup",
                active: true,
              }}
              btn2={{
                btnText: "Learn More",
                link: "/signup",
                active: false,
              }}
              codeColor={"text-yellow-25"}
              codeBlock={`<!DOCTYPE html>\n<html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a>\n</nav>\n</body>`}
              color={<div className="codeblock1"></div>}
            />
          </div>

          <div className="w-100">
            <CodeBlocks
              position={"d-flex flex-column flex-lg-row-reverse"}
              heading={
                <div className="display-5 fw-semibold w-100 w-lg-50">
                  <h1>
                    Start
                    <HighlightText text={" coding in seconds"} />
                  </h1>
                </div>
              }
              subHeading={
                "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
              }
              btn1={{
                btnText: "Continue Lesson",
                link: "/signup",
                active: true,
              }}
              btn2={{
                btnText: "Learn More",
                link: "/signup",
                active: false,
              }}
              codeColor={"text-white"}
              codeBlock={`<!DOCTYPE html>\n<html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a>\n</nav>\n</body>`}
              color={<div className="codeblock2"></div>}
            />
          </div>
        </div>
        
          <ExpolreMore/>
      </div>

      
        

      {/* section 2 */}
      <div className="section-2 ">
        <div className="bg-banner d-flex justify-content-center align-items-center">
          <div className="d-flex flex-row gap-4 mt-4 hover:transition-all scale-0.95">
            <CTAButton active={true} linkto={"/signup"}>
              <div className="d-flex flex-row align-items-center gap-2">
                Explore Full Catalog
                <FaArrowRight />
              </div>
            </CTAButton>

            <CTAButton active={false} linkto={"/login"}>
              Learn More
            </CTAButton>
          </div>
        </div>

        <div className="container">
          <div className="d-flex flex-column justify-content-center align-items-center mt-5 ">
            <div className="content">
              <div className="d-flex flex-column flex-lg-row w-100 mx-lg-5 mx-3">
                <div className="w-100 w-lg-50">
                  <div className="display-5 fw-semibold">
                    <h1 style={{ width: "90%" }}>
                      Get the skills you need for a
                      <HighlightText text={" job that is in demand."} />
                    </h1>
                  </div>
                </div>

                <div className="w-100 w-lg-50 d-flex flex-column align-items-start gap-lg-3 gap-1">
                  <p
                    style={{ width: "80%" }}
                    className="d-flex align-items-center"
                  >
                    The modern StudyNotion dictates its own terms. Today, to be
                    a competitive specialist requires more than professional
                    skills.
                  </p>
                  <CTAButton active={true} linkto={"/signup"}>
                    Learn More
                  </CTAButton>
                </div>
              </div>
            </div>

            {/* Timeline Section - Section 2 */}
            <TimelineSection />

            {/* Learning Language Section - Section 3 */}
            <LearningLanguageSection />
          </div>
        </div>
      </div>

      {/* become an instructor */}

      <div className="instructor-section">
        <div className="d-flex flex-column flex-lg-row w-100 gap-5 mb-5">
          <div className="img">
            <img src={instructorImg} alt="" className="img-fluid" />
          </div>
          <div className="d-flex flex-column justify-content-center align-items-start instructor-content col-12 col-lg-5 ms-lg-5">
            <div className="display-5 fw-semibold text-white instructor">
              <h1>
                Become an <br />
                <HighlightText text={" Instructor"} />
              </h1>
            </div>
            <p className="d-flex w-100 w-lg-50">
              Instructors from around the world teach millions of students on
              StudyNotion. We provide the tools and skills to teach what you
              love.
            </p>
            <div className="d-flex gap-3 mt-5">
              <CTAButton active={true}>
                <div className="d-flex align-items-center gap-2">
                  {"Start Teaching Today"}
                  <FaArrowRight />
                </div>
              </CTAButton>
            </div>
          </div>
        </div>
      </div>

      {/* review slider */}

      <div className="container">
        <div className="d-flex flex-column align-items-center">
          <h2 className='text-center fw-semibold mb-5 text-white'>Review from others learners</h2>
        </div>
      </div>
      <ReviewSlider/>

    </div>
  );
};

export default Home;
