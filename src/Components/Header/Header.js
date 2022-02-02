import * as React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import './Header.css'

function Header(props) {
  const theme = useTheme()
  const ReduceFontSize = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Grid container sx={{ height: '550px' }} alignItems='center'>
      {/*Above Image for Mobile Header*/}
      <Grid
        item
        xs={12}
        sm={12}
        md={7}
        justifyContent='center'
        alignItems='center'
        sx={{ display: { xs: 'flex', sm: 'none' } }}
      ></Grid>
      {/*Title for Header*/}
      <Grid
        item
        xs={12}
        sm={12}
        md={5}
        justifyContent='flex-start'
        alignItems='center'
      >
        <Grid item container direction='row'>
          <Grid item container>
            <Typography variant='subtitle1' component='div'>
              {'Console.WriteLine("'}
            </Typography>
          </Grid>

          <Grid item container>
            <Grid item container justifyContent='flex-start'>
              <Typography
                variant={ReduceFontSize ? 'h3' : 'h2'}
                component='div'
                className='NoWrap'
              >
                Hello World!
              </Typography>
            </Grid>
            <Grid item container justifyContent='flex-start'>
              <Typography
                variant={ReduceFontSize ? 'h2' : 'h1'}
                component='div'
                className='Cursive-Font'
                sx={{ mt: { xs: -11.5, md: -15 }, ml: { xs: 18, md: 18 } }}
              >
                Hey there
              </Typography>
            </Grid>
          </Grid>
          <Grid item container>
            <Typography variant='subtitle1' component='div'>
              {')"'}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      {/*Image of Normal Header*/}
      <Grid
        item
        xs={12}
        sm={6}
        md={7}
        justifyContent='center'
        alignItems='center'
        sx={{ display: { xs: 'none', sm: 'flex' } }}
      >
        <Grid container item>
          <img src='MyProfile.png' className='Main-Image' />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Header
