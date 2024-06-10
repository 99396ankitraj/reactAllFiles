import React , {createContext} from 'react';
import './App.css';
import ComA from './components/ComA';
const FirstName = createContext();
const LastName = createContext();

 
function App() {

  return (
    <>
      <FirstName.Provider value={"Ankit"}>
       <LastName.Provider value={"Rajput"}>
        <ComA />
       </LastName.Provider>
      </FirstName.Provider>
     
    </>
  )
}

export default App
export {FirstName ,LastName}
