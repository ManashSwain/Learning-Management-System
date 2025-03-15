import { useContext } from 'react';
import './App.css';
import { ContextProvider } from './context/AppContext';


function App() {

  const  {testfunction} = useContext(ContextProvider);
 

  return (
    <>
    <h1>App component</h1>
    <button onClick={testfunction}>test context API</button>
    </>
  )
}

export default App
