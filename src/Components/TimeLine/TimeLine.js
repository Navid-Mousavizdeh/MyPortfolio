import * as React from 'react'
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'
import TimelineDot from '@mui/lab/TimelineDot'
import FastfoodIcon from '@mui/icons-material/Fastfood'
import LaptopMacIcon from '@mui/icons-material/LaptopMac'
import HotelIcon from '@mui/icons-material/Hotel'
import RepeatIcon from '@mui/icons-material/Repeat'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

import SchoolIcon from '@mui/icons-material/School'
import CardMembershipIcon from '@mui/icons-material/CardMembership'
import BrushIcon from '@mui/icons-material/Brush'
import ApprovalIcon from '@mui/icons-material/Approval'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import BusinessIcon from '@mui/icons-material/Business'
import LanguageIcon from '@mui/icons-material/Language'
import { Card } from '@mui/material'

export default function MyTimeline() {
  return (
    <Grid container>
      <Grid container item justifyContent='center'>
        <Card sx={{ display: 'inline', p: 2, mb: -2.6 }} className='Glass-Card'>
          My Time Line
        </Card>
      </Grid>
      <Grid container item justifyContent='center'>
        <Timeline position='alternate'>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              align='right'
              variant='body2'
              color='secondary'
            >
              1400/10
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color='secondary'>
                <LanguageIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant='h6' component='span'>
                Develop Kadoo project
              </Typography>
              <Typography component='div'>
                Develop an e-commerce and online plant caring <br /> system for
                DAS course
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              variant='body2'
              color='text.secondary'
            >
              1400/5
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color='primary'>
                <LaptopMacIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant='h6' component='span'>
                Course project
              </Typography>
              <Typography>
                Develop a desktop library management <br />
                application in C# and XAML
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              align='right'
              variant='body2'
              color='secondary'
            >
              1400/1
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color='secondary'>
                <BusinessIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant='h6' component='span'>
                Hired in Sabanet company
              </Typography>
              <Typography component='div'>
                Graphic designer and content specialist
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              variant='body2'
              color='text.secondary'
            >
              1399/10
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color='primary'>
                <EmojiEventsIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant='h6' component='span'>
                Top students celebration
              </Typography>
              <Typography>Second highest average in school</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              align='right'
              variant='body2'
              color='secondary'
            >
              1399/5
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color='secondary'>
                <ApprovalIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant='h6' component='span'>
                Attend courses on Coursera.com
              </Typography>
              <Typography variant='caption' component='div'>
                HTML CSS JS for Web Developers (John Hopkins University)
              </Typography>
              <Typography variant='caption' component='div'>
                User Interface Design (California Institute of Arts)
              </Typography>
              <Typography variant='caption' component='div'>
                Fundamentals of Graphic Design (California Institute of Arts)
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              variant='body2'
              color='text.secondary'
            >
              1398/8
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color='primary'>
                <BrushIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant='h6' component='span'>
                Graphic design freelancing
              </Typography>
              <Typography>Start logo design concepts</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              align='right'
              variant='body2'
              color='secondary'
            >
              1398/7
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color='secondary'>
                <CardMembershipIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant='h6' component='span'>
                Admission in university
              </Typography>
              <Typography>Iran University of Science and Technology</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              align='right'
              variant='body2'
              color='text.secondary'
            >
              1398/3
            </TimelineOppositeContent>

            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color='primary'>
                <SchoolIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Grid container direction='column' justifyContent='flex-end'>
                <Grid item justifyContent='flex-start'>
                  <Typography variant='h6'>High school graduation</Typography>
                </Grid>
                <Grid item justifyContent='flex-start'>
                  <Typography>Mandegar Alborz high school</Typography>
                </Grid>
                <Grid item justifyContent='flex-start'>
                  <Typography>Math major with 19.81 grade</Typography>
                </Grid>
              </Grid>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Grid>
    </Grid>
  )
}
