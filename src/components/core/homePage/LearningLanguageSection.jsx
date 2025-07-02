import React from 'react'
import HighlightText from './HighlightText'
const LearningLanguageSection = () => {
  return (
    <div className='container d-flex flex-column align-items-center justify-content-center mt-100'>
      <div className="d-flex flex-column justify-content-center align-items-center w-100 w-lg-50">
        <div className="d-flex align-items-center justify-content-center fw-semibold">
                  <h1>
                    Your swiss knife for
                    <HighlightText text={" learning any language"} />
                  </h1>
                </div>
               <div className='d-flex align-items-center justify-content-center justify-content-sm-start language'>
                 <p>Using spin making learning multiple
                languages easy. with 20+ languages realistic voice-over, 
                progress tracking, custom schedule and more.</p>
               </div>
       </div>
    </div>
  )
}

export default LearningLanguageSection