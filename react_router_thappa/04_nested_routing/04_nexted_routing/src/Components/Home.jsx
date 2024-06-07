import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const Home = () => {
  return (
    <>
    <Header />
{/* <section><h1>Home page !!</h1></section> */}
<Outlet />
</>
  )
}

export default Home