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
    <Stack direction="row" 
    justifyContent="space-around"
    sx={{gap: {
      sm: '120px',
      xs: '40px'
    },
      mt: {sm: '32px',
      xs: '20px'
    }}}>
      <Link to="/">
      <img src={Logo} alt="logo" style={{
        width: '48px',
         height: '48px', 
        margin: '0 20px'
      }}/>
      </Link>
      <Stack 
      direction="row"
      gap="40px"
      fontSize="24px"
      alignItems="flex-end"
      >
        <Link to="/" style={{textDecoration:'none',
      color:'#3A1212',
      borderBottom:'3px solid #FF2625'
      }}>Home</Link>
        <a href="#exercises" 
        style={{textDecoration:'none',
        color: '#3A1212'}}>Exercises</a>
      </Stack>
    </Stack>
  )
}

export default Navbar