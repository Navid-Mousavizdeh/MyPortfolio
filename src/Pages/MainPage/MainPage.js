import * as React from 'react'
import PropTypes from 'prop-types'
import Alert from '@mui/material/Alert'
import Grid from '@mui/material/Grid'
import { styled, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import MuiDrawer from '@mui/material/Drawer'
import MuiAppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import CssBaseline from '@mui/material/CssBaseline'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ListItem from '@mui/material/ListItem'
import HomeIcon from '@mui/icons-material/Home'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import Container from '@mui/material/Container'
import Fab from '@mui/material/Fab'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import Zoom from '@mui/material/Zoom'
import { Card } from '@mui/material'
import InfoIcon from '@mui/icons-material/Info'
import HandymanIcon from '@mui/icons-material/Handyman'
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact'
import './MainPage.css'
//import components
import Header from '../../Components/Header/Header'
import CommentBar from '../../Components/CommentBar/CommentBar'
import ClassTree from '../../Components/ClassTree/ClassTree'
import MyTimeline from '../../Components/TimeLine/TimeLine'
import About from '../../Components/About/About'
import SkillTab from '../../Components/SkillTab/SkillTab'
import ContactMe from '../../Components/ContactMe/ContactMe'

function ScrollTop(props) {
  const { children, window } = props
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  })

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor'
    )

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      })
    }
  }

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role='presentation'
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Zoom>
  )
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
}

const drawerWidth = 240

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
})

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
})

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}))

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}))

function MainPage(props) {
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)
  const [scrollValue, setScrollValue] = React.useState(0)
  const [select, setSelect] = React.useState(0)

  let HeaderRef = React.useRef()
  let AboutRef = React.useRef()
  let SkillRef = React.useRef()
  let ContactRef = React.useRef()

  const HeaderScroll = () => {
    handleDrawerClose()
    setTimeout(() => {
      window.scrollTo({ behavior: 'smooth', top: HeaderRef.current.offsetTop })
    }, 500)
  }

  const AboutScroll = () => {
    handleDrawerClose()
    setTimeout(() => {
      window.scrollTo({ behavior: 'smooth', top: AboutRef.current.offsetTop })
    }, 500)
  }
  const SkillScroll = () => {
    handleDrawerClose()
    setTimeout(() => {
      window.scrollTo({ behavior: 'smooth', top: SkillRef.current.offsetTop })
    }, 500)
  }
  const ContactScroll = () => {
    handleDrawerClose()
    setTimeout(() => {
      window.scrollTo({ behavior: 'smooth', top: ContactRef.current.offsetTop })
    }, 500)
  }

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
    console.log(window.scrollY)
  }

  return (
    <React.Fragment>
      <Grid
        sx={{ display: { xs: 'flex', md: 'none' } }}
        justifyContent='center'
      >
        <Alert severity='error' sx={{ my: 3, mx: 2 }}>
          Responsive version is under construction! Please come back with a pc
          ...
        </Alert>
      </Grid>
      <Grid sx={{ display: { xs: 'none', md: 'flex' } }}>
        <Toolbar id='back-to-top-anchor' />
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <AppBar position='fixed' open={open} className='AppBar-Glass'>
            <Toolbar>
              <IconButton
                color='inherit'
                aria-label='open drawer'
                onClick={handleDrawerOpen}
                edge='start'
                sx={{
                  marginRight: '36px',
                  ...(open && { display: 'none' }),
                }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant='h6' noWrap component='div'>
                Navid Mousavizadeh
              </Typography>
            </Toolbar>
          </AppBar>

          <Drawer variant='permanent' open={open}>
            <DrawerHeader>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'rtl' ? (
                  <ChevronRightIcon />
                ) : (
                  <ChevronLeftIcon />
                )}
              </IconButton>
            </DrawerHeader>
            <Divider />
            <List sx={{ ml: 0.5 }}>
              <ListItem button key={'Home'} onClick={() => HeaderScroll()}>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary={'Home'} />
              </ListItem>
              <ListItem
                selected={select === 1}
                button
                key={'Information'}
                onClick={() => AboutScroll()}
              >
                <ListItemIcon>
                  <InfoIcon />
                </ListItemIcon>
                <ListItemText primary={'About Me'} />
              </ListItem>
              <ListItem
                selected={select === 2}
                button
                key={'Skill'}
                onClick={() => SkillScroll()}
              >
                <ListItemIcon>
                  <HandymanIcon />
                </ListItemIcon>
                <ListItemText primary={'My Skills'} />
              </ListItem>
              <ListItem
                selected={select === 3}
                button
                key={'Contact'}
                onClick={() => ContactScroll()}
              >
                <ListItemIcon>
                  <ConnectWithoutContactIcon />
                </ListItemIcon>
                <ListItemText primary={'Contact Me'} />
              </ListItem>
            </List>
          </Drawer>

          <Container>
            <Box
              component='main'
              sx={{ flexGrow: 1, pt: 3, pl: 0, pr: 0, pb: 3 }}
              ref={HeaderRef}
            >
              <Header />
              <Box ref={AboutRef}>
                <CommentBar Text={'Who am I?'} />
              </Box>

              <Grid container justifyContent='center'>
                <ClassTree />
              </Grid>

              <Grid container justifyContent='center' sx={{ mt: 4, mb: 9 }}>
                <About />
              </Grid>
              <Grid container justifyContent='center'>
                <MyTimeline />
              </Grid>
              <Box ref={SkillRef}>
                <CommentBar Text={'What are my skills?'} />
              </Box>

              <Grid container justifyContent='center'>
                <SkillTab />
              </Grid>
              <Grid container sx={{ mt: 2 }}>
                <CommentBar Text={'Where can you find me?'} ref={ContactRef} />
              </Grid>

              <Grid
                container
                justifyContent='center'
                ref={ContactRef}
                sx={{ mt: -3 }}
              >
                <ContactMe />
              </Grid>
            </Box>
          </Container>
          <ScrollTop {...props}>
            <Fab
              color='secondary'
              size='small'
              aria-label='scroll back to top'
              onClick={() => HeaderScroll()}
            >
              <KeyboardArrowUpIcon />
            </Fab>
          </ScrollTop>
        </Box>
      </Grid>
    </React.Fragment>
  )
}

export default MainPage
