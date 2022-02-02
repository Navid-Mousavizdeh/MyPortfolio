import * as React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import './Class.css'
import { Card } from '@mui/material'

function Class(props) {
  return (
    <Card sx={{ height: '100%' }}>
      <Grid container justifyContent='center' sx={{ height: '100%' }}>
        <Grid
          container
          item
          justifyContent='center'
          alignItems='center'
          sx={{ height: '60px' }}
          className='Glass-Title'
        >
          {props.Enum && (
            <Grid container item justifyContent='center'>
              <Typography variant='caption' sx={{ pt: 0.5 }}>
                {'<<Enumeration>>'}
              </Typography>
            </Grid>
          )}
          <Typography variant='h5'>{props.Title}</Typography>
        </Grid>
        <Grid container item>
          <List sx={{ pt: 1, pl: 1, pr: 1, width: '100%' }}>
            {props.University && (
              <ListItem disablePadding>
                <ListItemText
                  primary=''
                  secondary={
                    <React.Fragment>
                      <Typography component='span' className='ListItem-Text'>
                        - string university ={' '}
                      </Typography>
                      <Typography class='Farsi-Text' component='span'>
                        "دانشگاه علم و صنعت ایران"
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
            )}
            {props.PrivateProperties.split('|').map((p) => (
              <ListItem
                disablePadding
                className='Wrap-Text'
                sx={{ width: '100%' }}
              >
                <ListItemText
                  primary={p}
                  className='Wrap-Text'
                  sx={{ width: '100%' }}
                />
              </ListItem>
            ))}
          </List>
          <Divider sx={{ width: '100%' }} />
          <List sx={{ pt: 1, pl: 1, pr: 1 }}>
            {props.PublicProperties.split('|').map((p) => (
              <ListItem disablePadding className='Wrap-Text'>
                <ListItemText primary={p} className='Wrap-Text' />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Card>
  )
}

export default Class
