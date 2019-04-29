import React, {Component, Fragment} from 'react'


class SubmitButton extends Component {

  handleClick = () => {
    this.props.createSearchList()
  }

  render() {
    return (
      <Fragment>
        <button id="create-character-button" className="card-button">Create Character!</button>
      </Fragment>
    )
  }

}


export default SubmitButton
