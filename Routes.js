import React from 'react'
import { Router, Scene, Stack } from 'react-native-router-flux'
import Login from './components/login'
import Register from './components/register'
import Home from './components/home'

export default Routes = () => 
   <Router>
      <Stack key="root">
        <Scene key="login" component={Login} title="Login" />
        <Scene key="register" path={"register"} component={Register} title="Register" />
        <Scene key="home" component={Home} title="Home" />
      </Stack>
   </Router>
