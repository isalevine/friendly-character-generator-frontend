import React, {Component, Fragment} from 'react'


class ClickHereMessage extends Component {

  handleMouseEnter = (ev) => {
    let div = document.getElementById('deck-click-here-text')
    div.classList.add('fadeout-effect')
  }

  handleMouseLeave = (ev) => {
    let div = document.getElementById('deck-click-here-text')
    div.classList.remove('fadeout-effect')

  }

  handleClick = () => {
    // REFACTOR: if cards maxed/convertedCharacter is found, click should RESET! => setState back to default?? (temp: just go back to main menu...)
    // 
    if (this.props.convertedCharacters.length > 0 || this.props.nextCard === 4) {
      // let div = document.getElementById('deck-click-here-box')
      // div.classList.add('fadeout-effect')
      // setTimeout(() => {
      //   div.remove()
      // }, 1000)

      this.props.history.push('/')
    } 

    if (this.props.nextCard < 5) {
      this.props.flipCard(this.props.nextCard)
    }
    else {
      console.log("All cards already drawn!")
    }
  }

  displayText = () => {
    if (this.props.convertedCharacters.length > 0) {
      return (
        <Fragment>
          Click<br />
          to<br />
          go<br />
          back!
        </Fragment>
      )

    } else if (this.props.nextCard === 1 ) {
      return (
        <Fragment>
          Click<br />
          here<br />
          to<br />
          start!
        </Fragment>
      )

    } else {
      return (
        <Fragment>
          Click<br />
          here<br />
          to<br />
          flip!
        </Fragment>
      ) 
    }
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


export default ClickHereMessage
