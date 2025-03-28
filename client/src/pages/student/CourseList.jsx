import React, { useContext, useEffect, useState } from "react";
import Searchbar from "../../components/student/Searchbar";
import { ContextProvider } from "../../context/AppContext";
import CourseCard from "../../components/student/CourseCard";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../../components/student/Footer";


const CourseList = () => {

  const {courseData} = useContext(ContextProvider);
  const {input} = useParams();
  const [filteredCourses , setFilteredCourses] = useState([]);
  const navigate = useNavigate();
  useEffect(()=>{
    if(courseData  && courseData.length > 0){
          const tempCourses = courseData.slice(); 
        input ? setFilteredCourses(tempCourses.filter(item=>
          item.courseTitle.toLowerCase().includes(input.toLowerCase())
        )) : setFilteredCourses(courseData) ;
    }   
  },[courseData , input])
  return (
    <>
      <div className="flex justify-between px-36 mt-6">
        <div className="flex flex-col w-[50%]">
          <h1 className="font-bold text-2xl">Course List</h1>
          <div>
            <nav class="flex" aria-label="Breadcrumb">
              <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                <li class="inline-flex items-center">
                  <a
                    href="#"
                    class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                  >
                    <svg
                      class="w-3 h-3 me-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                    </svg>
                    Home
                  </a>
                </li>
                <li>
                  <div class="flex items-center">
                    <svg
                      class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                    <a
                      href="#"
                      class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                    >
                      course List
                    </a>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <div className="w-[50%] mx-[-100px]">
          <Searchbar/>
        </div>
      </div>
      {/* button  */}
      <div className="px-36 mt-6">{ input ?  
      <button onClick={()=>{navigate('/course-list')}} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none ">{input} <span className="pl-2 cursor-pointer">X</span> </button> : <></>}
      </div>
      {/* course list  */}
      <div className="px-36 mt-16 mb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredCourses.map((course,index)=>{
          return<CourseCard key={index} course={course}/>
        })}
      </div>
      <Footer/>
    </>
  );
};

export default CourseList;
