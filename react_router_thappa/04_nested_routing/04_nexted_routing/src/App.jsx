import './App.css'
import {BrowserRouter, Routes , Route} from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Error from './Components/Error';

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path ="/" element = {<Home />} >
      <Route path ="/about" element = {<About />}/>
      <Route path ="/contact" element = {<Contact />}/>
      <Route path ="*" element = {<Error />}/>
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App


