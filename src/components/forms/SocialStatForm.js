import React, {Component, Fragment} from 'react'


class SocialStatForm extends Component {

  render() {
    return (
      <Fragment>
        <form id="social-stat-form">
          c. When talking as my character, I like to...<br />
          <input type="radio" name="social-stat-form" value="leader" />be an inspiring leader!<br />
          <input type="radio" name="social-stat-form" value="perform" />be a performer! / be in disguise!<br />
          <input type="radio" name="social-stat-form" value="lie" />lie and manipulate others!<br />
          <input type="radio" name="social-stat-form" value="seduce" />seduce others!<br />
        </form>
      </Fragment>
    )
  }

}


export default SocialStatForm
