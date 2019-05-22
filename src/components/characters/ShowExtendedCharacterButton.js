import React, {Component, Fragment} from 'react'


class ShowExtendedCharacterButton extends Component {

  handleClick = (ev) => {
    ev.target.disabled = true;
    this.props.changeShowExtendedCharacter()
  }

  render() {
    return (
      <Fragment>
        <button id="show-extended-character-button" className="card-button" onClick={this.handleClick}>Show more!</button>
      </Fragment>
    )
  }

}


export default ShowExtendedCharacterButton