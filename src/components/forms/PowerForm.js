import React, {Component, Fragment} from 'react'

import SubmitButton from './SubmitButton'


class PowerForm extends Component {

  handleChange = (ev) => {
    this.props.changeSearchPreference("power_preference", ev.target.value)
    if (this.props.nextCard === 3) {
      this.props.flipCard(this.props.nextCard)
    }
  }

  render() {

    let button;
    if (this.props.formSearchPreference.playstyle_preference !== "" &&
        this.props.formSearchPreference.action_preference !== "" &&
        this.props.formSearchPreference.stat_preference !== "" &&
        this.props.formSearchPreference.power_preference !== "") {
      button = <SubmitButton
        formSearchPreference={this.props.formSearchPreference}
        createSearchPreference={this.props.createSearchPreference}
      />
    }

    return (
      <Fragment>
        <div className="card" style={this.props.style}>

          <div className="card-text">
            <form id="power-form" onChange={this.handleChange}>
              2. I like to have powers that...<br />
              <input type="radio" name="power-form" value="damage" />deal extra damage!<br />
              <input type="radio" name="power-form" value="heal" />heal and protect others!<br />
              <input type="radio" name="power-form" value="stealth" />give me super-stealth!<br />
              <input type="radio" name="power-form" value="mind" />boost my mind and senses!<br />
              <input type="radio" name="power-form" value="control" />help me control others!<br />
            </form>
          </div>

          <div>
            {button}
          </div>


        </div>
      </Fragment>
    )
  }

}


export default PowerForm
