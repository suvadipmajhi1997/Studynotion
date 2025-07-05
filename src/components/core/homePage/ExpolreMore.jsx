import React, { useState } from 'react';
import HighlightText from './HighlightText';
import { HomePageExplore } from '../../../data/homepage-explore';
import CourseCard from './CourseCard';

const tabsName = [
  "Free",
  "New to coding",
  "Most popular",
  "Skills paths",
  "Career paths",
];

const ExploreMore = () => {
  const [currentTab, setCurrentTab] = useState(tabsName[0]);
  const [courses, setCourses] = useState(HomePageExplore[0].courses);
  const [currentCard, setCurrentCard] = useState(HomePageExplore[0].courses[0].heading);

  const setMyCards = (value) => {
    setCurrentTab(value);
    const result = HomePageExplore.find(course => course.tag === value);
    if (result) {
      setCourses(result.courses);
      setCurrentCard(result.courses[0].heading);
    }
  };

  return (
    <div className="">
      <div className="fw-semibold display-5 text-center text-white">
        Unlock the 
        <HighlightText text={" power of code"}/>
      </div>
      <p className='fs-6 text-center text-white mt-3'>Learn to Build Anything You Can Imagine</p>

      <div className="d-none d-lg-flex flex-wrap gap-2 px-1 py-1 mx-auto bg-richblack-800 rounded-pill" style={{width:"max-content"}}>
        {tabsName.map((ele,idx)=>{
          return(
            <div className={`fs-5 d-flex flex-row align-items-center gap-2 
              ${currentTab===ele ? "bg-dark text-white fs-5" : "text-richblack-400"} rounded-pill courseTab px-4 py-2`} 
            key={idx}
            onClick={()=>setMyCards(ele)}
            >
              {ele}
            </div>
          )
        })}
      </div>

      <div className="course-card-space"></div>

      {/* course card */}
      <div className="course-card d-flex flex-wrap mt-lg-5 mt-5">
        <div className="d-flex flex-column flex-lg-row gap-5 mx-auto">
          {courses.map((ele,idx)=>{
            return(
              <CourseCard
              key={idx}
              cardData={ele}
              currentCard={currentCard}
              setCurrentCard={setCurrentCard}
              />
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default ExploreMore;
