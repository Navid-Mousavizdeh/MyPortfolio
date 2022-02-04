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
import './BackEnd.css'
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

const BackEnd = () => {
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
              <Typography variant='h6'>My Back-end skills</Typography>
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
                  Python
                </Typography>
                <Box sx={{ flexGrow: 1 }}>
                  <BorderLinearProgress variant='determinate' value={60} />
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
                  Django
                </Typography>
                <Box sx={{ flexGrow: 1 }}>
                  <BorderLinearProgress variant='determinate' value={70} />
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
                  REST framework
                </Typography>
                <Box sx={{ flexGrow: 1 }}>
                  <BorderLinearProgress variant='determinate' value={60} />
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
                  PHP
                </Typography>
                <Box sx={{ flexGrow: 1 }}>
                  <BorderLinearProgress variant='determinate' value={35} />
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
                  SQL and Database
                </Typography>
                <Box sx={{ flexGrow: 1 }}>
                  <BorderLinearProgress variant='determinate' value={40} />
                </Box>
              </Grid>
              <Divider sx={{ width: '100%', my: 0.5 }} />
              <Grid
                container
                item
                direction='row'
                alignItems='center'
                sx={{ mx: 1, mt: 1 }}
              >
                <Typography sx={{ mr: 1 }} sx={{ width: '150px' }}>
                  JWT
                </Typography>
                <Box sx={{ flexGrow: 1 }}>
                  <BorderLinearProgress variant='determinate' value={70} />
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
                  Swagger
                </Typography>
                <Box sx={{ flexGrow: 1 }}>
                  <BorderLinearProgress variant='determinate' value={50} />
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
                  Docker
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
          BackgroundImage='KadooBackground.png'
          Title='Kadoo Shop'
          Body={`Kadoo is a online shop store designed particularly for plant and plant caring tools. It's developed for Design and analysis of systems course in Iran university of science and technology. As I attend to both front-end and back-end teams, Back-end developed with Python Django and front-end with Material UI and React framework.`}
          Chips='Python|Django|React|MUI|Swagger'
          DialogTitle='Kadoo Shop Test Video'
          Src='Kadoo Preview 480.mp4'
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

export default BackEnd
