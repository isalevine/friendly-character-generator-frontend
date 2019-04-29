import React, {Component, Fragment} from 'react'


class SubmitButton extends Component {

  handleClick = (ev) => {
    ev.target.disabled = true;
    let formSearchPreference = {
      stat_preference: this.props.formSearchPreference.stat_preference,
      action_preference: this.props.formSearchPreference.action_preference,
      power_preference: this.props.formSearchPreference.power_preference
    }
    this.props.createSearchPreference(formSearchPreference)
  }

  render() {
    return (
      <Fragment>
        <button id="create-character-button" className="card-button" onClick={this.handleClick}>Create Character!</button>
      </Fragment>
    )
  }

}


export default SubmitButton
