import React, {Component} from 'react'


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
    if (this.props.nextCard === 4) {
      let div = document.getElementById('deck-click-here-box')
      div.classList.add('fadeout-effect')
      setTimeout(() => {
        div.remove()
      }, 1000)
    }

    if (this.props.nextCard < 5) {
      this.props.flipCard(this.props.nextCard)
    }
    else {
      console.log("All cards already drawn!")
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
          Click<br />
          here<br />
          to<br />
          flip!
        </div>

      </div>
    )
  }

}


export default ClickHereMessage
