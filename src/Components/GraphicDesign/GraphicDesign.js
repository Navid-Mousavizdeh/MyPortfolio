import React, { useState, useEffect } from 'react'
import { Card, Grid, Typography, Divider } from '@mui/material'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import CircularProgress, {
  circularProgressClasses,
} from '@mui/material/CircularProgress'
import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress'
import './GraphicDesign.css'
import WorkCard from '../WorkCard/WorkCard'

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 12,
  borderRadius: 12,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: '#2a3443',
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 12,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}))

const GraphicDesign = () => {
  const [load, setLoad] = useState(false)

  useEffect(() => {
    if (!load) {
      setTimeout(() => {
        setLoad(true)
      }, 3000)
    }
  }, [])

  return (
    <Grid container alignItems='center' justifyContent='center'>
      {load && (
        <Grid container alignItems='stretch'>
          <Grid item xs={12} md={4} justifyContent='flex-start'>
            <Card sx={{ boxShadow: 3 }}>
              <Grid container>
                <Grid
                  container
                  item
                  sx={{ height: '60px' }}
                  justifyContent='center'
                  alignItems='center'
                  className='Glass-Title-Yellow'
                >
                  <Typography variant='h6'>My Graphic design skills</Typography>
                </Grid>
                <Grid container item sx={{ mb: 1 }}>
                  <Grid
                    container
                    item
                    direction='row'
                    alignItems='center'
                    sx={{ mx: 1, mt: 1 }}
                  >
                    <Typography sx={{ mr: 1 }} sx={{ width: '150px' }}>
                      Illustrator
                    </Typography>
                    <Box sx={{ flexGrow: 1 }}>
                      <BorderLinearProgress variant='determinate' value={90} />
                    </Box>
                  </Grid>
                  <Grid
                    container
                    item
                    direction='row'
                    alignItems='center'
                    sx={{ mx: 1, mt: 1 }}
                  >
                    <Typography sx={{ mr: 1 }} sx={{ width: '150px' }}>
                      Photoshop
                    </Typography>
                    <Box sx={{ flexGrow: 1 }}>
                      <BorderLinearProgress variant='determinate' value={95} />
                    </Box>
                  </Grid>
                  <Grid
                    container
                    item
                    direction='row'
                    alignItems='center'
                    sx={{ mx: 1, mt: 1 }}
                  >
                    <Typography sx={{ mr: 1 }} sx={{ width: '150px' }}>
                      After Effect
                    </Typography>
                    <Box sx={{ flexGrow: 1 }}>
                      <BorderLinearProgress variant='determinate' value={65} />
                    </Box>
                  </Grid>
                  <Grid
                    container
                    item
                    direction='row'
                    alignItems='center'
                    sx={{ mx: 1, mt: 1 }}
                  >
                    <Typography sx={{ mr: 1 }} sx={{ width: '150px' }}>
                      InDesign
                    </Typography>
                    <Box sx={{ flexGrow: 1 }}>
                      <BorderLinearProgress variant='determinate' value={40} />
                    </Box>
                  </Grid>
                  <Grid
                    container
                    item
                    direction='row'
                    alignItems='center'
                    sx={{ mx: 1, mt: 1 }}
                  >
                    <Typography sx={{ mr: 1 }} sx={{ width: '150px' }}>
                      XD
                    </Typography>
                    <Box sx={{ flexGrow: 1 }}>
                      <BorderLinearProgress variant='determinate' value={75} />
                    </Box>
                  </Grid>
                  <Grid
                    container
                    item
                    direction='row'
                    alignItems='center'
                    sx={{ mx: 1, mt: 1 }}
                  >
                    <Typography sx={{ mr: 1 }} sx={{ width: '150px' }}>
                      Premiere
                    </Typography>
                    <Box sx={{ flexGrow: 1 }}>
                      <BorderLinearProgress variant='determinate' value={20} />
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={12} md={8} sx={{ pl: 3 }}>
            <WorkCard
              BackgroundImage='Faslin-LogoShape.jpg'
              Title='Faslin Logo Design'
              Body={`This logo was designed for a clothing brand called 'Faslin' which is come from four seasons in persian. This logo is designed according to golden ratio rules and minimalist style.`}
              Chips='Logo Design'
              DialogTitle='Faslin Logo Design'
              image={true}
              Src='Faslin-high.jpg'
            />
            <WorkCard
              BackgroundImage='Eivan Color Logo V1.jpg'
              Title='Eivan Logo Design'
              Body={`This logo was designed for a monthly journal in Iran university if science and technology with concept of Iran traditional balcony form and it's word.`}
              Chips='Logo Design'
              DialogTitle='Eivan Logo Design'
              image={true}
              Src='Eivan-high.jpg'
            />
            <WorkCard
              BackgroundImage='Logo Shape Red.jpg'
              Title='Traitive Logo Design'
              Body={`This logo is coming from blending two words of 'Creative' and 'Training' with concept of pencil and infinity light bulb representing ideas and creativity.`}
              Chips='Logo Design'
              DialogTitle='Traitive Logo Design'
              image={true}
              Src='Traitive-high.jpg'
            />
            <WorkCard
              BackgroundImage='BillBoard.jpg'
              Title='Billboard Design'
              Body={`This Billboard is design for Sabanet company with winter theme and advertising purposes.`}
              Chips='Billboard Design'
              DialogTitle='Billboard Design'
              image={true}
              Src='BillBoard.jpg'
            />
            <WorkCard
              BackgroundImage='Slides.jpg'
              Title='Summer Website Slides Design'
              Body={`These website slides were designed for Sabanet company with summer theme. Of course you can see winter slides on `}
              LinkAddress='https://www.sabanet.ir/'
              LinkText='Sabanet.ir'
              Chips='Slide Design'
              DialogTitle='Summer Website Slides Design'
              image={true}
              Src='Slides.jpg'
            />
            <WorkCard
              BackgroundImage='MotionBackground.png'
              Title='Sabanet Motion Graphics'
              Body={`This motion graphic is an advertising one for Sabanet company and it's designed and animated by me.`}
              Chips='Motion Graphics'
              DialogTitle='Motion Graphics Video'
              Src='Motion.mp4'
            />
          </Grid>
        </Grid>
      )}
      {!load && <CircularProgress />}
    </Grid>
  )
}

export default GraphicDesign
