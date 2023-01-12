//Quick note to self, running rafce is clutch, it 
//will auto generate the component

import React from 'react';

import {Link } from 'react-router-dom';

import { Stack } from '@mui/material';

//The Stack component manages layout of i
// mmediate children along the vertical 
// or horizontal axis with optional spacing
//  and/or dividers between each child.

//Stacks are very useful for creating 
//horizontal or vertical lists 


//above will link the link from react router dom, 
//and the stack from mui kit, these will help 
//build visually appealing components quickly


import Logo from '../assets/images/Logo.png';

const Navbar = () => {
  return (
    <Stack>
      <Link to="/">
      <img src={Logo} alt="logo" style={{
        width: '48px',
         height: '48px', 
        margin: '0 20px'
      }}/>
      </Link>
      <Stack>
        <Link to="/">Home</Link>
        <a href="#exercises" 
        style={{textDecoration:'none',
        color: '#3A1212'}}>Exercises</a>
      </Stack>
    </Stack>
  )
}

export default Navbar