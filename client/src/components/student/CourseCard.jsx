import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { ContextProvider } from "../../context/AppContext";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const { currency , calculateRating } = useContext(ContextProvider);
  return (
    <>
      <Link
        to={"/course/" + course._id}
        onClick={() => {
          scrollTo(0, 0);
        }}
      >
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm">
          <img
            className="rounded-t-lg"
            src={course.courseThumbnail}
            alt="Thumbnail"
          />

          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              {course.courseTitle}
            </h5>

            <p className="mb-3 font-normal text-gray-700 ">
              {course.educator.name}
            </p>
            <div className="flex  gap-2 items-center">
              <p>{4.5}</p>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <img
                    key={i}
                    src={calculateRating({course}) ? assets.star : assets.star_blank}
                    alt="star"
                    className="w-4 h-4"
                  />
                ))}
              </div>

              <p className="text-gray-600">{course.courseRatings.length}</p>
            </div>
            <div className="font-bold">
              {currency}
              {(
                course.coursePrice -
                (course.discount * course.coursePrice) / 100
              ).toFixed(2)}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CourseCard;
