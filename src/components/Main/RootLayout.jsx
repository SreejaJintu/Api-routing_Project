import React from 'react'
import NavBar from './NavBar'
import { Route, Routes } from 'react-router-dom'
import Countries from '../country/Countries'
import Todo from '../todo/Todo'
import PageNotFound from './PageNotFound'
import Footer from './Footer'
import Home from './Home'
// import {Link} from 'react-router-dom'
//import Root from './RootLayout'
function RootLayout() {
  return (
    <div className='home'>
   <NavBar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/countries' element={<Countries/>}/>
    <Route path='/todo' element={<Todo/>}/>
    <Route path='*' element={<PageNotFound/>}/>
    
   </Routes>
   <Footer/>
    </div>
  )
}

export default RootLayout