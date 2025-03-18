/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useEffect, useState } from 'react'
import { dummyCourses } from '../assets/assets';

export const ContextProvider = createContext();
const AppContext = (props) => {

  // currency 
  const currency = import.meta.env.VITE_CURRENCY;
  
  // courses 
   const [courseData , setCourseData] = useState([]);
   const rendercourses = async ()=>{
       setCourseData(dummyCourses);
   }

  // Star rating calculation function 

  const calculateRating = ({course})=>{
    if(course.courseRatings.length === 0){
       return 0 ;
    }
    else {
      let totalRating = 0 ;
      course.courseRatings.forEach((rating)=>{
        totalRating += rating.rating ;
      })
      return totalRating / course.courseRatings.length
    }
  }

  // Educator 

  const [educator,setEducator] = useState(true);

   useEffect(()=>{
       rendercourses();
   },[])

   const values = {currency , courseData , calculateRating , educator,setEducator}
  return (
    <>
    <ContextProvider.Provider value={values}>
     {props.children}
    </ContextProvider.Provider>
    </>
  )
}

export default AppContext
