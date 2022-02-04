import React from 'react'
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
  return (
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
          Body={`This logo was design for a clothing brand called 'Faslin' which is come from four seasons in persian. This logo is designed according to golden ratio rules and minimalist style.`}
          Chips='Logo Design'
          DialogTitle='Faslin Logo Design'
          image={true}
          Src='Faslin-high.jpg'
        />
        <WorkCard
          BackgroundImage='YaldaBackground.png'
          Title='Yalda Site'
          Body='This site is developed as a sample landing page of an online shop for Yalda Night. This project is developed with HTML and pure CSS only with JS and Simple PHP on back-end.'
          Chips='HTML|CSS|JS|PHP|MySQL'
          DialogTitle='Yalda Test Video'
          Src='Yalda.mp4'
        />
      </Grid>
    </Grid>
  )
}

export default GraphicDesign
