import React, {Component, Fragment} from 'react'


class SocialStatForm extends Component {

  render() {
    return (
      <Fragment>
        <form id="social-stat-form">
          c. When talking as my character, I like to...<br />
        <input type="radio" name="social-stat-form" value="charisma" />be an inspiring leader!<br />
          <input type="radio" name="social-stat-form" value="charisma" />be a performer! / be in disguise!<br />
          <input type="radio" name="social-stat-form" value="charisma" />lie and manipulate others!<br />
          <input type="radio" name="social-stat-form" value="charisma" />seduce others!<br />
        </form>
      </Fragment>
    )
  }

}


export default SocialStatForm
