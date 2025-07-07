import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import "../App.css"; 
// import img from '../assets/Images/r1.jpg'
import StarRating from './StarRating';

// Icons
import { FaStar } from "react-icons/fa";
// Import required modules
import { Autoplay, FreeMode, Pagination } from "swiper/modules"

import { reviews } from '../data/reviewData'

const ReviewSlider = () => {
  return (
    <div className='text-white'>
        <div className="container mx-auto w-100 mb-5" style={{ height: '250px'}}>
            <Swiper
          slidesPerView={4}
          spaceBetween={25}
          loop={true}
          freeMode={true}
          autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          breakpoints={{
    320: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 4,
    },
  }}
          className="w-100 "
        >
            {reviews.map((rev,i)=>
            {
                return (
                  <SwiperSlide key={i}>
                    <div className="d-flex flex-column gap-3 bg-richblack-800 p-3 fs-2">
                      <div className="d-flex gap-4 align-items-center">
                        <img
                          src={rev.Image}
                          alt=""
                          className="rounded-pill object-fit-cover"
                          style={{width:'40px', height:'40px'}}
                        />
                        <div className="d-flex flex-column text-richblack-400">
                          <h4>{rev.name}</h4>
                          <h6>{rev.email}</h6>
                        </div>
                      </div>

                      <p className='fs-6 text-richblack-400'>{rev.comment}</p>

                      <div className="d-flex align-items-center gap-3 ">
                        <h5 className="fw-semibod text-yellow-100">
                          {rev.rating.toFixed(1)}
                        </h5>
                        <StarRating rating={rev.rating} />

                         {/* <ReactStars
                          count={5}  
                          value={rev.rating}
                          size={24}
                          edit={false}
                          activeColor="#ffd700"
                          color="#ffffff"
                          emptyIcon={<FaStar color="#ffffff" />}
                          fullIcon={<FaStar color="#ffd700" />}
                          
                        />  */}
                      </div>
                    </div>
                  </SwiperSlide>
                );
            }
            )}
        </Swiper>
        </div>

    </div>
  )
}

export default ReviewSlider