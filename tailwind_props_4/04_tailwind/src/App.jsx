import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/card'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-center '>hello</h1>
      <Card username = "Ankit"/>
      <Card username = "Ayan"/>
    </>
  )
}

export default App
