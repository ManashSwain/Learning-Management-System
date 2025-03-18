import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Searchbar = () => {

  const [input , setInput] = useState('');
  const navigate = useNavigate();

  const searchCourses = (e)=>{
    e.preventDefault();
    navigate(`/course-list/` + input);

  }
  return (
    <>
    
<form className="px-3 max-w-md mx-auto">   
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" value={input} onChange={(e)=>{setInput(e.target.value)}} id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search for courses..." required />
        <button type="submit" onClick={searchCourses} className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ">Search</button>
    </div>
</form>

    </>
  )
}

export default Searchbar
