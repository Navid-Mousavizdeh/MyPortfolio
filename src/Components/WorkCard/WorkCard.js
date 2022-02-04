import * as React from 'react'
import { Card, Grid, Typography, Divider, Chip } from '@mui/material'
import PropTypes from 'prop-types'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import 'mui-player/dist/mui-player.min.css'
import MuiPlayer from 'mui-player'

import './WorkCard.css'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}))

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label='close'
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  )
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
}

function WorkCard(props) {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  React.useEffect(() => {
    if (open && !props.image) {
      console.log(111)
      setTimeout(() => {
        var mp = new MuiPlayer({
          container: '#mui-player',
          title: props.Title,
          src: props.Src,
        })
        mp.toggleControls(true)

        console.log(222)
      }, 1000)
    }
  }, [open])

  return (
    <Grid container sx={{ height: '250px' }} alignItems='center' sx={{ mb: 2 }}>
      <Grid item xs={4} sx={{ height: '100%' }}>
        <Card sx={{ height: '100%', p: 1 }} className='Image-Container'>
          <Grid
            container
            item
            justifyContent='center'
            alignItems='center'
            className='Container-Image'
            sx={{ height: '100%' }}
          >
            <Button
              variant='text'
              onClick={handleClickOpen}
              className='Correct-Button-padding'
            >
              <img src={props.BackgroundImage} class='Card-Image' />
            </Button>
          </Grid>
        </Card>
      </Grid>
      <Grid item xs={8} sx={{ height: '90%', ml: -2 }}>
        <Card sx={{ height: '100%', boxShadow: 3 }}>
          <Grid container item sx={{ pl: 4, pr: 2, py: 2 }} direction='column'>
            <Grid item>
              <Typography variant='h5'>{props.Title}</Typography>
            </Grid>
            <Grid container item>
              <Divider sx={{ width: '100%', my: 1 }} />
            </Grid>

            <Grid item>
              <Typography variant='body'>{props.Body}</Typography>
            </Grid>

            <Grid item container direction='row' sx={{ py: 1 }}>
              {props.Chips.split('|').map((p) => (
                <Chip
                  label={p}
                  size='small'
                  variant='outlined'
                  color='secondary'
                  sx={{ ml: 0.5 }}
                />
              ))}
            </Grid>
          </Grid>
        </Card>
      </Grid>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        open={open}
      >
        <BootstrapDialogTitle
          id='customized-dialog-title'
          onClose={handleClose}
        >
          {props.DialogTitle}
        </BootstrapDialogTitle>
        <DialogContent dividers>
          {!props.image && (
            <Grid
              container
              sx={{ minWidth: '400px' }}
              id='mui-player'
              display={open ? 'flex' : 'none'}
            ></Grid>
          )}
          {props.image && (
            <Grid
              container
              sx={{ minWidth: '400px' }}
              display={open ? 'flex' : 'none'}
            >
              <img src={props.Src} class='Dialog-Image' />
            </Grid>
          )}
        </DialogContent>
      </BootstrapDialog>
    </Grid>
  )
}

export default WorkCard
