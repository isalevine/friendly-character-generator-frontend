import React, {Component, Fragment} from 'react'


class MentalStatForm extends Component {

  render() {
    return (
      <Fragment>
        <form id="mental-stat-form">
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
