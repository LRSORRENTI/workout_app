import React, { useState } from 'react'
//useState will help us with some logic
import {Box } from '@mui/material';
const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchExercises />
      <Exercises />
    </Box>
  )
}

export default Home