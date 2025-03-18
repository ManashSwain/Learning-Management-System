/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useEffect, useState } from 'react'
import { dummyCourses } from '../assets/assets';

export const ContextProvider = createContext();
const AppContext = (props) => {

  const currency = import.meta.env.VITE_CURRENCY;
  
   const [courseData , setCourseData] = useState([]);
   const rendercourses = async ()=>{
       setCourseData(dummyCourses);
   }

   useEffect(()=>{
       rendercourses();
   },[])

   const values = {currency , courseData}
  return (
    <>
    <ContextProvider.Provider value={values}>
     {props.children}
    </ContextProvider.Provider>
    </>
  )
}

export default AppContext
