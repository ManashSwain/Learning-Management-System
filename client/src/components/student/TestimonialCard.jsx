import React from 'react'
import { assets } from '../../assets/assets'


const TestimonialCard = ({ name, role, image, feedback ,rating}) => {
  return (
  <>
   <div className="bg-white shadow-lg rounded-lg p-6 text-center">
      <img 
        alt={name} 
        className="w-20 h-20 mb-4 object-cover object-center rounded-full mx-auto border-2 border-gray-200 bg-gray-100" 
        src={image} 
      />
      <div className='flex justify-center my-2'>
        {
          [...Array(5)].map((_,i)=>{
            return<img  key={i} src={i < rating ? assets.star : assets.star_blank}/>
          })
        }
      </div>
      <p className="text-gray-600 leading-relaxed">{feedback}</p>
      <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-4 mb-2"></span>
      <h2 className="text-gray-900 font-semibold text-lg">{name}</h2>
      <p className="text-gray-500 text-sm">{role}</p>
    </div>
  </>
  )
}

export default TestimonialCard
