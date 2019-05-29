import React, {Component, Fragment} from 'react'


class GoBackMessage extends Component {

  handleMouseEnter = (ev) => {
    let div = document.getElementById('deck-click-here-text')
    div.classList.add('fadeout-effect')
  }

  handleMouseLeave = (ev) => {
    let div = document.getElementById('deck-click-here-text')
    div.classList.remove('fadeout-effect')

  }

  handleClick = () => {
      this.props.history.push('/')
  }

  displayText = () => {
      return (
        <Fragment>
          Click<br />
          to<br />
          go<br />
          back!
        </Fragment>
      )
  }

  render() {
    return (
      <div id="deck-click-here-box"
      className="click-here-box"
      style={this.props.style}
      onMouseEnter={this.handleMouseEnter}
      onMouseLeave={this.handleMouseLeave}
      onClick={this.handleClick}>
        <div id="deck-click-here-text" className="click-here-text" style={{"position": "absolute", "top": "10%", "left": "22%"}}>
          {this.displayText()}
        </div>

      </div>
    )
  }

}


export default GoBackMessage