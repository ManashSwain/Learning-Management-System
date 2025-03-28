import React from 'react'
import { dummyTestimonial } from '../../assets/assets'
import TestimonialCard from './TestimonialCard'

const Testimonials = () => {
  return (
    <>
    <section className="text-gray-600 body-font bg-gray-100 py-12">
      <div className="container px-5 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Testimonials</h2>
        <p className='mb-6 px-12 text-center'>Hear from our learners as they share their journeys of transformation, success, and how our platform has made a difference in their lives.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dummyTestimonial.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
    </>
  )
}

export default Testimonials
