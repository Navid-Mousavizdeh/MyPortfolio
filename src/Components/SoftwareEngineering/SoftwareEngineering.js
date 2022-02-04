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
import './SoftwareEngineering.css'
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

const SoftwareEngineering = () => {
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
              <Typography variant='h6'>
                My software engineering skills
              </Typography>
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
                  Problem Solving
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
                  Algorithm
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
                  Data Structure
                </Typography>
                <Box sx={{ flexGrow: 1 }}>
                  <BorderLinearProgress variant='determinate' value={80} />
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
                  Database
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
                  Git
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
                  UML Diagrams
                </Typography>
                <Box sx={{ flexGrow: 1 }}>
                  <BorderLinearProgress variant='determinate' value={80} />
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
                  Agile Methodologies
                </Typography>
                <Box sx={{ flexGrow: 1 }}>
                  <BorderLinearProgress variant='determinate' value={60} />
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
                  C
                </Typography>
                <Box sx={{ flexGrow: 1 }}>
                  <BorderLinearProgress variant='determinate' value={80} />
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
                  C++
                </Typography>
                <Box sx={{ flexGrow: 1 }}>
                  <BorderLinearProgress variant='determinate' value={85} />
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
                  C#
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
                  Python
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
                  Basic (VB,B4A)
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
                  Java
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
          BackgroundImage='LibraryBackGround.png'
          Title='Rayo Library'
          Body='Rayo Library is a system that is designed for library management in both member and admin sides. This project was done for Advanced programming course with C# and WPF.'
          Chips='C#|WPF|XAML|Database|Sql server'
          DialogTitle='Rayo Library Test Video'
          Src='Library.mp4'
        />

        <WorkCard
          BackgroundImage='FroggerBackground.png'
          Title='Frogger Game'
          Body='Frogger is a 1981 arcade action game developed by Konami and
                manufactured by Sega. Sample version of this game is developed
                with C++ and SFML library by me for programming course.'
          Chips='C++|SFML|OOP'
          DialogTitle='Frogger Test Video'
          Src='Frogger.mp4'
        />
        <WorkCard
          BackgroundImage='ReshteBackground.png'
          Title='Konkor Major Selection'
          Body={`This project was done for my highschool consultant with Excel platform and VBA. winch import a dataset of user's interests, city, name and generates appropriate result of Konkor majors according to interests, distance, univercity level and ...`}
          Chips='Excel|VBA'
          DialogTitle='Konkor Major Selection'
          Src='Entekhab Reshte.mp4'
        />
        <WorkCard
          BackgroundImage='APPBackground.jpg'
          Title='Truth or Dare Android Game'
          Body='This android game was one of first digital versions of truth or dare game on Cafe Bazaar platform. It was developed with B4a and reach 10.000 download with score of 4.6 among over 10.000 votes.'
          LinkAddress='https://cafebazaar.ir/app/jorat.haghighat'
          LinkText='Cafe Bazaar'
          Chips='Android|B4A|Sqlite'
          DialogTitle='Android Test Video'
          Src='App.mp4'
        />
      </Grid>
    </Grid>
  )
}

export default SoftwareEngineering
