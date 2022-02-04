import * as React from 'react'
import PropTypes from 'prop-types'
import SwipeableViews from 'react-swipeable-views'
import { useTheme } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import SoftwareEngineering from '../SoftwareEngineering/SoftwareEngineering'
import FrontEnd from '../FrontEnd/FrontEnd'
import BackEnd from '../BackEnd/BackEnd'
import GraphicDesign from '../GraphicDesign/GraphicDesign'

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  }
}

export default function SkillTab() {
  const theme = useTheme()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleChangeIndex = (index) => {
    setValue(index)
  }

  return (
    <Box sx={{ bgcolor: 'background.paper', width: '100%' }}>
      <AppBar position='static'>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor='secondary'
          textColor='inherit'
          variant='fullWidth'
          aria-label='full width tabs example'
        >
          <Tab label='Software engineering' {...a11yProps(0)} />
          <Tab label='Front-end Development' {...a11yProps(1)} />
          <Tab label='Back-end Development' {...a11yProps(2)} />
          <Tab label='Graphic Design' {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x' : 'x-reverse'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <SoftwareEngineering />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <FrontEnd />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <BackEnd />
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <GraphicDesign />
        </TabPanel>
      </SwipeableViews>
    </Box>
  )
}
