import React, {Component, Fragment} from 'react'


class MentalStatForm extends Component {

  render() {
    return (
      <Fragment>
        <form id="mental-stat-form">
          b. When thinking and solving puzzles, I like to...<br />
          <input type="radio" name="mental-stat-form" value="spells" />cast lots of spells! / use lots of technology!<br />
          <input type="radio" name="mental-stat-form" value="clues" />find clues and notice important details!<br />
          <input type="radio" name="mental-stat-form" value="knowledge" />know lots about any topic!<br />
        </form>
      </Fragment>
    )
  }

}


export default MentalStatForm
