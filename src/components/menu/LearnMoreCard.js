import React, {Component, Fragment} from 'react'

import LearnMoreButton from './LearnMoreButton'
import LearnMoreFullSize from './LearnMoreFullSize'


class LearnMoreCard extends Component {

  constructor() {
    super()
    this.state = {
      displayFullSize: false,
    }
  }

  toggleDisplayFullSize = () => {
    this.setState({displayFullSize: !this.state.displayFullSize})
  }

  displayFullSize = () => {
    if (this.state.displayFullSize) {
        return <LearnMoreFullSize style={this.props.style} toggleDisplayFullSize={this.toggleDisplayFullSize}/>

    } else {
      return (
        <div className="card card-form" style={this.props.style}>
          <div className="card-text">
            Learn More!
          </div>

        <LearnMoreButton toggleDisplayFullSize={this.toggleDisplayFullSize} />
      </div>
      )
    }
  }

  render() {
      return (
          <Fragment>

            {this.displayFullSize()}

        </Fragment>
      )
  }

}


export default LearnMoreCard