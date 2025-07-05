import React from 'react'
// Importing React Icons
import { HiUsers } from "react-icons/hi";
import { ImTree } from "react-icons/im";


const CourseCard = ({ cardData, currentCard, setCurrentCard }) => {
  const isActive = currentCard === cardData?.heading;

  return (
    <div
      className={`cursor-pointer text-light ${isActive ? "bg-white text-dark card-shadow" : "bg-dark"} border-0`}
      onClick={() => setCurrentCard(cardData?.heading)}
      style={{
        width: "100%",
        maxWidth: "360px",
        height: "300px",
        boxSizing: "border-box",
        boxShadow: isActive ? "12px 12px 0 0 #fef08a" : "none",
        color: isActive ? "#1c1c1e" : "#e4e4e7",
      }}
    >
      {/* Top  */}
      <div
        className="border-bottom border-2 border-dashed"
        style={{
          borderColor: "#4b5563", // richblack-400
          height: "80%",
          padding: "1.5rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <div
          className="fw-semibold"
          style={{
            fontSize: "20px",
            color: isActive ? "#1c1c1e" : "#e4e4e7", //heading color
          }}
        >
          {cardData?.heading}
        </div>

        <div style={{ color: "#9ca3af" /* richblack-400 */ }}>
          {cardData?.description}
        </div>
      </div>

      {/* Bottom */}
      <div
        className="d-flex justify-content-between px-4 py-3 fw-medium"
        style={{ color: isActive ? "#93c5fd" : "#6b7280" /* blue-300 or richblack-300 */ }}
      >
        <div className="d-flex align-items-center gap-2" style={{ fontSize: "16px" }}>
          <HiUsers />
          <p className="m-0">{cardData?.level}</p>
        </div>
        <div className="d-flex align-items-center gap-2" style={{ fontSize: "16px" }}>
          <ImTree />
          <p className="m-0">{cardData?.lessionNumber} Lesson</p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;