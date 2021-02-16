import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import User from './User'
import Login from './Login'
import Signup from './Signup'
import LogOut from './LogOut'

const Navbar = () => {
  return (
    <div>
      <nav>
          <div>
        <Link to='/'>User</Link>
        <Link to='/signup'>SignUp</Link>
        {
            localStorage.getItem('login')
            ?<li>
            <Link to='/logout'>Logout</Link>
            </li>
            :
            <li>
            <Link to='/login'>Login</Link>
            </li>
            }
           
        
        </div>
      </nav>
      <Switch>
        <Route exact path='/' component={User}></Route>
        <Route path='/login' component={Login}></Route>
        <Route path='/signup' component={Signup}></Route>
        <Route path='/logout' component={LogOut}></Route>
      </Switch>
    </div>
  )
}

export default Navbar
