import React from 'react'
import './scss/main.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home } from './Components/Pages/Home'
import { Container } from 'react-bootstrap'

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <Container className='back--in-down'>
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
    </Container>
  </Router>
)

export default App;
