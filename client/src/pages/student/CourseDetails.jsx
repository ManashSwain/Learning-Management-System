import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ContextProvider } from '../../context/AppContext';

const CourseDetails = () => {
  const {id} = useParams();
 

  const {courseData} = useContext(ContextProvider) ;
  const [singleCourseData , getSingleCourseData] = useState(null);
  
  useEffect(()=>{
    if(courseData && courseData.length > 0){
      const singleCourse = courseData.find(course => course._id === id);
      getSingleCourseData(singleCourse);
    }
  },[courseData , id])
  if (!singleCourseData) {
    return <p>Loading...</p>;
  }
  return (
   <>
   <div>
    {/* left column  */}
    <div>
      <h1>{singleCourseData.courseTitle}</h1>
    </div>
    {/* right column  */}
    <div></div>
   </div>
     
   </>
  )
}

export default CourseDetails
