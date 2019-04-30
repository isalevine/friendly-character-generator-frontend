import React, {Component, Fragment} from 'react'


class PhysicalStatForm extends Component {

  handleChange = (ev) => {
    this.props.changeSearchPreference("action_preference", ev.target.value)
    if (this.props.nextCard === 2) {
      this.props.flipCard(this.props.nextCard)
    }
    this.props.calculateStatPreference()
  }

  render() {
    return (
      <Fragment>
        <form id="physical-stat-form" onChange={this.handleChange}>
          a. When fighting, I like to...<br />
        <input type="radio" name="physical-stat-form" value="weapon" />deal lots of damage with my weapon!<br />
          <input type="radio" name="physical-stat-form" value="tank" />take lots of damage and never die!<br />
          <input type="radio" name="physical-stat-form" value="sneak" />sneak around and attack while hidden!<br />
          <input type="radio" name="physical-stat-form" value="spells" />cast lots of spells! / use lots of technology!<br />
        </form>
      </Fragment>
    )
  }

}


export default PhysicalStatForm
