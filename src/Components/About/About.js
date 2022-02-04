import React from 'react'
import { Card, Grid, Typography } from '@mui/material'
import './About.css'

const About = () => {
  return (
    <Grid container alignItems='center'>
      <Grid
        item
        xs={12}
        md={4}
        sx={{ height: '120%' }}
        justifyContent='flex-start'
      >
        <Card sx={{ height: '100%', width: '150%' }}>
          <Grid item sx={{ height: '100%', width: '56%' }}>
            <img src='MyProfile.png' className='Main-Image' />
          </Grid>
        </Card>
      </Grid>
      <Grid item xs={12} md={8}>
        <Card sx={{ p: 2, ml: -4 }} className='Glass-Card-Yellow'>
          <Typography>{`I'm a creative and motivated person who has developed a responsible approach in undertaking tasks in these recent years. I'm a top computer engineering student in Iran University of Science and Technology and also a graphic designer in Sabanet company since 1400. Coding for a better world and graphic design for a more beautiful one. Because of 5 years experience in fields of coding and 3 years in graphic design, I can inspect any challenge in aspects of functionality and aesthetics.`}</Typography>
        </Card>
      </Grid>
    </Grid>
  )
}

export default About
