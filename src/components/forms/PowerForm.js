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
    if (this.props.nextCard === 4) {
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
              <input type="radio" name="power-form" value="knowledge" />give me limitless knowledge!<br />
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
