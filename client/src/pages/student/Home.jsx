import React from 'react'
import Hero from '../../components/student/Hero'
import Searchbar from '../../components/student/Searchbar'
import Companies from '../../components/student/Companies'
import Testimonials from '../../components/student/Testimonials'
import CallToAction from '../../components/student/CallToAction'
import Footer from '../../components/student/Footer'
import CourseSection from '../../components/student/CourseSection'


const Home = () => {
  return (
    <>
    <Hero/>
    <Searchbar/>
    <Companies/>
    <CourseSection/>
    <Testimonials/>
    <CallToAction/>
    <Footer/>
    </>
  )
}

export default Home
