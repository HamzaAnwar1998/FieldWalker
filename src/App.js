import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Login } from './Components/Login'
import { Signup } from './Components/Signup'
import { Home } from './Components/Home'

export class App extends Component {
  render() {
    return (
      <div className='wrapper'>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path='/signup' component={Signup} />
            <Route path='/home' component={Home} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
