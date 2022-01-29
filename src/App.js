// Import Initial Files
import React from 'react'
import './App.css'
// Import Theme Files
import { ThemeProvider } from '@mui/material/styles'
import ThemeGenerator from './Theme/ThemeGenerator'
// Import Dom And React Components
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'
// Import Pages
import MainPage from './Pages/MainPage/MainPage'

function App() {
  return (
    <ThemeProvider theme={ThemeGenerator}>
      <React.Fragment>
        <CssBaseline />
        <Router>
          <Switch>
            <Route exact path='/' component={MainPage} />
          </Switch>
        </Router>
      </React.Fragment>
    </ThemeProvider>
  )
}

export default App
