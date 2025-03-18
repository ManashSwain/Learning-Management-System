import React, { useContext } from "react";
import CourseCard from "./CourseCard";
import { ContextProvider } from "../../context/AppContext";
import { Link } from "react-router-dom";

const CourseSection = () => {
  const { courseData } = useContext(ContextProvider);
  return (
    <>
      <section className="py-10 px-24">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold">Learn from the best</h2>
          <p className="text-gray-600 mt-2">
            Discover our top-rated courses across various categories.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {courseData.slice(0,4).map((courses, index) => {
            return <CourseCard key={index} course={courses} />;
          })}
        </div>

        <div className="text-center mt-6">
          <Link to="/course-list" onClick={()=>{scrollTo(0,0)}}>
          <button className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition">
            Show all courses
          </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default CourseSection;
