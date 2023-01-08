import React from 'react'

import { Route, Routes} from 'react-router-dom';

//The above will be used to route between the 
//home-page and the exercise details page

import { Box } from '@mui/material'

// this is a div with some colors / shading from 
//material ui

import './App.css';

import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';


//Below inside of the return, 
//the first route will be for our home component 
//that will be created soon
//the second route with the path = /exercise/:id
//will be for dynamically rendered content, and it will 
// be a self closing component

// Self-closing components are useful 
// when you need to render a simple 
// component that does not have any 
// internal state or logic, and does 
// not need to hold any children. They
//  can be used to represent simple HTML elements,
//   such as a <br> or <hr>, or to render a
//    custom component that does not have
//     any children
const App = () => {
  return (
    <Box width="400px">
      Navbar
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      </Box>
  )
}

export default App