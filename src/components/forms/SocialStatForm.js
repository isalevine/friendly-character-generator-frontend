import React, {Component, Fragment} from 'react'


class SocialStatForm extends Component {

  handleChange = (ev) => {
    this.props.changeSearchPreference("action_preference", ev.target.value)
    if (this.props.nextCard === 2) {
      this.props.flipCard(this.props.nextCard)
    }
  }

  render() {
    return (
      <Fragment>
        <form id="social-stat-form" onChange={this.handleChange}>
          c. When talking as my character, I like to...<br />
        <input type="radio" name="social-stat-form" value="leader" />be an inspiring leader!<br />
          <input type="radio" name="social-stat-form" value="perform" />be a performer! / be in disguise!<br />
          <input type="radio" name="social-stat-form" value="manipulate" />lie and manipulate others!<br />
          <input type="radio" name="social-stat-form" value="seduce" />seduce others!<br />
        </form>
      </Fragment>
    )
  }

}


export default SocialStatForm
