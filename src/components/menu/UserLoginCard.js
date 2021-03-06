import React, {Component, Fragment} from 'react'
import { API_URL, HEADERS } from '../../constants';

import ArchetypeMakerArtist from '../art/ArchetypeMakerArtist'

class UserLoginCard extends Component {

  constructor() {
    super()
    this.state = {
      loginForm: {
        username: "",
        password: ""
      },
      newUserForm: {
        username: "",
        password: "",
        email: "",
        name: "",
        bio: ""
      },
      loggedIn: false,
      loginToken: null
    }
    this.fetchPostLogin = this.fetchPostLogin.bind(this)
    this.fetchPostNewUser = this.fetchPostNewUser.bind(this)
    this.handleChangeLogin = this.handleChangeLogin.bind(this)
    this.handleChangeNewUser = this.handleChangeNewUser.bind(this)
    this.handleSubmitLogin = this.handleSubmitLogin.bind(this)
    this.handleSubmitNewUser = this.handleSubmitNewUser.bind(this)
    this.resetLoginForm = this.resetLoginForm.bind(this)
    this.resetNewUserForm = this.resetNewUserForm.bind(this)
  }

  fetchPostLogin() {
    let url = API_URL + "/login"
    let config = {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify({user: this.state.loginForm})
    }
    fetch(url, config)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      localStorage.setItem("user_id", data.user.id)
      localStorage.setItem("token", data.jwt)
      this.resetLoginForm()
      this.setState({loggedIn: true, loginToken: data.jwt})
      // debugger
    })
    .catch(error => console.error('Error: ', error))
  }

  fetchPostNewUser() {
    let url = API_URL + "/users"
    let config = {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify({user: this.state.newUserForm})
    }
    fetch(url, config)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      this.resetNewUserForm()
    })
    .catch(error => console.error('Error: ', error))
  }

  resetLoginForm() {
    this.setState({loginForm: {
      username: "",
      password: ""
    }})    
  }

  resetNewUserForm() {
    this.setState({newUserForm: {
      username: "",
      password: "",
      email: "",
      name: "",
      bio: ""
    }})
  }

  handleChangeLogin(ev) {
    let updatedField = ev.target.name
    let updatedValue = ev.target.value
    let updatedState = {...this.state.loginForm, [updatedField]: updatedValue}
    this.setState({loginForm: updatedState})
  }

  handleChangeNewUser(ev) {
    let updatedField = ev.target.name
    let updatedValue = ev.target.value
    let updatedState = {...this.state.newUserForm, [updatedField]: updatedValue}
    this.setState({newUserForm: updatedState})
  }

  handleSubmitLogin(ev) {
    ev.preventDefault();
    this.fetchPostLogin();
  }

  handleSubmitNewUser(ev) {
    ev.preventDefault();
    this.fetchPostNewUser();
  }


  handleReroute = () => {
    this.props.history.push('/archetype_maker')
  }

  handleLogout = () => {
    localStorage.clear()
    this.setState({loggedIn: false, loginToken: null})
  }


  checkLoggedIn = () => {
    if (localStorage.getItem("user_id") && localStorage.getItem("token")) {
      return (
        <Fragment>
          <button className="user-logged-in-button" style={{"top": 265}} onClick={this.handleReroute}>Create a new Archetype!</button>
          <button className="user-logged-in-button" style={{"top": 320}} onClick={this.handleLogout}>Logout</button>
        </Fragment>
      )
    } else {
      return (
        <Fragment>
          {this.renderUserLoginForm()}
          <br />
          {this.renderNewUserForm()}  
        </Fragment>
      )
    }
  }

  renderArt = () => {
    if (localStorage.getItem("user_id") && localStorage.getItem("token")) {
      return (
        <Fragment>
          <ArchetypeMakerArtist />
        </Fragment>
      )
    }
  }

  renderUserLoginForm = () => {
    return (
      <form id="user-login-form" onSubmit={this.handleSubmitLogin}>
        <strong>Login to create Archetypes:</strong><br />
        <label>Username</label>
        <input type="text" onChange={this.handleChangeLogin} name="username" value={this.state.loginForm.username}/><br />
        <label>Password</label>
        <input type="password" onChange={this.handleChangeLogin} name="password" value={this.state.loginForm.password}/><br />
        <input type="submit" />
      </form>
    )
  }

  
  renderNewUserForm = () => {
    return (
      <form id="new-user-form" onSubmit={this.handleSubmitNewUser}>
        <strong>Create new account:</strong><br />
        <label>Username</label>
        <input type="text" name="username" onChange={this.handleChangeNewUser} value={this.state.newUserForm.username}/><br />
        <label>Password</label>
        <input type="password" name="password" onChange={this.handleChangeNewUser} value={this.state.newUserForm.password}/><br />
        <label>Email</label>
        <input type="email" name="email" onChange={this.handleChangeNewUser} value={this.state.newUserForm.email}/><br />
        <label>Name</label>
        <input type="text" name="name" onChange={this.handleChangeNewUser} value={this.state.newUserForm.name}/><br />
        <label>Bio</label>
        <input type="text" name="bio" onChange={this.handleChangeNewUser} value={this.state.newUserForm.bio}/><br />
        <input type="submit" value="Create new account" />
      </form>
    )
  }


  renderArchetypeMakerButton = () => {

  }



  render() {
      return (
          <Fragment>
          <div className="card card-form" style={this.props.style}>
            <div className="card-text">

              <strong>Create a new Archetype!</strong><br /><br /><br />

              {this.checkLoggedIn()}
  
            </div>
            {this.renderArt()}
          </div>
        </Fragment>
      )
  }

}


export default UserLoginCard