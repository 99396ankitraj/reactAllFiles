import './App.css'
import {BrowserRouter, Route ,Routes} from "react-router-dom"
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Layout from './Components/Layout/Layout'

function App() {
  

  return( <BrowserRouter>
       
        <Routes>
          <Route path="/" element={<Layout />} >
          <Route path="" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
    </BrowserRouter>)
  }

export default App
