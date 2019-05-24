import React, {Component, Fragment} from 'react'


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
      }
    }
    this.fetchPostLogin = this.fetchPostLogin.bind(this)
    this.fetchPostNewAccount = this.fetchPostNewAccount.bind(this)
    this.handleChangeLogin = this.handleChangeLogin.bind(this)
    this.handleChangeNewUser = this.handleChangeNewUser.bind(this)
    this.handleSubmitLogin = this.handleSubmitLogin.bind(this)
    this.handleSubmitNewUser = this.handleSubmitNewUser.bind(this)
  }

  fetchPostLogin() {

  }

  fetchPostNewAccount() {

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
  }

  handleSubmitNewUser(ev) {
    ev.preventDefault();
  }

  render() {
      return (
          <Fragment>
          <div className="card card-form" style={this.props.style}>
            <div className="card-text">
              <form id="user-login-form" onChange={this.handleChangeLogin}>
                <strong>Login to create new character Archetypes!</strong><br />
                <label>Username</label>
                <input type="text" name="username" /><br />
                <label>Password</label>
                <input type="password" name="password" /><br />
                <input type="submit" />
              </form>
  
              <br />

              <form id="new-user-form" onChange={this.handleChangeNewUser}>
                <strong>Create new account:</strong><br />
                <label>Username</label>
                <input type="text" name="username" /><br />
                <label>Password</label>
                <input type="password" name="password" /><br />
                <label>Email address</label>
                <input type="email" name="email" /><br />
                <label>Real name</label>
                <input type="text" name="name" /><br />
                <label>Bio</label>
                <input type="text" name="bio" /><br />
                <input type="submit" value="Create new account" />
              </form>
  
            </div>
          </div>
        </Fragment>
      )
  }

}


export default UserLoginCard