import {useState} from 'react'
import './App.css'

function App() {

let [counter , setCounter] = useState(15)

// let counter = 5;


const addValue = ()=>{
  console.log("clicked add",counter);
  //  this will increament its value by only 1
  // setCounter(counter + 1)
  // setCounter(counter + 1)
  // setCounter(counter + 1)
  // setCounter(counter + 1)


  //this will increament its value by 4
  setCounter((counter) =>counter + 1)
  setCounter((counter) =>counter + 1)
  setCounter((counter) =>counter + 1)
  setCounter((counter) =>counter + 1)

}

const removeValue = ()=>{
  console.log("clicked remove",counter);
  // counter++;
  setCounter(counter - 1)
}

  return (
    <>
     <h1>chai aur react</h1> 
     <h2>counter value: {counter}</h2>

     <button onClick={addValue}>Add value {counter}</button>
     <br />
     <button onClick={removeValue}>Remove value {counter}</button>
    </>
  )
}

export default App
