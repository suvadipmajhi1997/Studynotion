import React from 'react'
import { Link } from 'react-router-dom'

const CTAButton = ({children,active,linkto}) => {
  return (
    <Link to={'/linkto'} className='text-decoration-none'>
         <div
      className={`rounded px-3 py-2 fw-bold text-center ${
        active ? "active-style" : "default-style"
      } ctaBtn`}
    >
      {children}
    </div>
    </Link>
  )
}

export default CTAButton