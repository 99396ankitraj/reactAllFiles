import './App.css'
import {BrowserRouter, Routes , Route} from "react-router-dom"

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path ="/" element = {<h1>Home page</h1>}/>
      <Route path ="/about" element = {<h1>About page</h1>}/>
      <Route path ="/contact" element = {<h1>Contact page</h1>}/>
    </Routes>
  </BrowserRouter>
}

export default App
