/* eslint-disable react-refresh/only-export-components */
import React, { createContext } from 'react'

export const ContextProvider = createContext();
const AppContext = (props) => {

  const currency = import.meta.env.VITE_CURRENCY;

    const values = {currency}
  return (
    <>
    <ContextProvider.Provider value={values}>
     {props.children}
    </ContextProvider.Provider>
    </>
  )
}

export default AppContext
