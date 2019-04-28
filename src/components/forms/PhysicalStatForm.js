import React, {Component, Fragment} from 'react'


class PhysicalStatForm extends Component {

  render() {
    return (
      <Fragment>
        <form id="physical-stat-form">
          a. When fighting, I like to...<br />
        <input type="radio" name="physical-stat-form" value="strength" />deal lots of damage with my weapon!<br />
          <input type="radio" name="physical-stat-form" value="stamina" />take lots of damage and never die!<br />
          <input type="radio" name="physical-stat-form" value="dexterity" />sneak around and attack while hidden!<br />
          <input type="radio" name="physical-stat-form" value="wisdom" />cast lots of spells! / use lots of technology!<br />
        </form>
      </Fragment>
    )
  }

}


export default PhysicalStatForm
