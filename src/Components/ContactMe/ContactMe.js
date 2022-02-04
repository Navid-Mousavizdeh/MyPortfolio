import * as React from 'react'
import { SocialLink, SocialProvider } from '@mui-treasury/components/socialLink'
import { useRoundSocialLinkStyles } from '@mui-treasury/styles/socialLink/round'
import { Grid, Typography } from '@mui/material'
import CallIcon from '@mui/icons-material/Call'
import Box from '@mui/material/Box'
import EmailIcon from '@mui/icons-material/Email'
import Divider from '@mui/material/Divider'

function ContactMe() {
  return (
    <Grid
      container
      alignItems='center'
      justifyContent='center'
      sx={{ mt: 4, mb: 1 }}
    >
      <Grid item sx={{ mr: 1 }}>
        <SocialProvider useStyles={useRoundSocialLinkStyles}>
          <SocialLink
            brand={'LinkedIn'}
            href={'https://www.linkedin.com/in/navid-mousavizadeh-8b8aa11b4'}
          />
          <SocialLink
            brand={'GithubCircle'}
            href={'https://github.com/Navid-Mousavizdeh'}
          />
        </SocialProvider>
      </Grid>
      <Divider orientation='vertical' flexItem />
      <Grid item sx={{ mr: 1 }}>
        <Box
          sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              p: 1,
              bgcolor: '#2e4556',
              borderRadius: '8px',
              mx: 1,
            }}
          >
            <CallIcon />
          </Box>
          <Typography>09391380514</Typography>
        </Box>
      </Grid>
      <Divider orientation='vertical' flexItem />
      <Grid item>
        <Box
          sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              p: 1,
              bgcolor: '#2e4556',
              borderRadius: '8px',
              mx: 1,
            }}
          >
            <EmailIcon />
          </Box>
          <Typography>s.navidm1380@gmail.com</Typography>
        </Box>
      </Grid>
    </Grid>
  )
}

export default ContactMe
