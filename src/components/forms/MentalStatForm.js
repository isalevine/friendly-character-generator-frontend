import React, {Component, Fragment} from 'react'


class MentalStatForm extends Component {

  handleChange = (ev) => {
    this.props.changeSearchPreference("action_preference", ev.target.value)
    if (this.props.nextCard === 2) {
      this.props.flipCard(this.props.nextCard)
    }
  }

  render() {
    return (
      <Fragment>
        <form id="mental-stat-form" onChange={this.handleChange}>
          b. When thinking and solving puzzles, I like to...<br />
        <input type="radio" name="mental-stat-form" value="wisdom" />cast lots of spells! / use lots of technology!<br />
          <input type="radio" name="mental-stat-form" value="wisdom" />find clues and notice important details!<br />
          <input type="radio" name="mental-stat-form" value="intelligence" />know lots about any topic!<br />
        </form>
      </Fragment>
    )
  }

}


export default MentalStatForm
