import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { ContextProvider } from '../../context/AppContext'

const CourseCard = ({course}) => {

  const {currency} = useContext(ContextProvider)
  return (
    <>
<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm">
    <a href="#">
        <img className="rounded-t-lg" src={course.courseThumbnail}alt="Thumbnail" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{course.courseTitle}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 ">{course.educator.name}</p>
        <div className=' flex flex-col'>
          <p>{4.5}</p>
        {[...Array(5)].map((_, i) => (
  <img key={i} src={assets.star} alt="star"  className='flex'/>
           ))}
           <p>22</p>
        </div>
        <div>{currency}
          {(course.coursePrice - course.discount * course.coursePrice / 100).toFixed(2)}
        </div>
    </div>
</div>

    </>
  )
}

export default CourseCard
