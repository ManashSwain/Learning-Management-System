/* eslint-disable react-refresh/only-export-components */
import React, { createContext } from 'react'

export const ContextProvider = createContext();
const AppContext = (props) => {


  const testfunction = ()=>{
    console.log("Function tested")
  }

    const values = {testfunction}
  return (
    <>
    <ContextProvider.Provider value={values}>
     {props.children}
    </ContextProvider.Provider>
    </>
  )
}

export default AppContext
