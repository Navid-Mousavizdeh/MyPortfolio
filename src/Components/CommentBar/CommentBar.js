import * as React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import './CommentBar.css'

function CommentBar(props) {
  return (
    <Grid container item className='Comment-BackGround' sx={{ mt: 1, mb: 2 }}>
      <Typography variant='subtitle1' className='Color-Comment' sx={{ pl: 2 }}>
        {'// ' + props.Text}
      </Typography>
    </Grid>
  )
}

export default CommentBar
