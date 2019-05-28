import React, {Component, Fragment} from 'react'


class LearnMoreCard extends Component {

  render() {
      return (
          <Fragment>
          <div className="card card-form" style={this.props.style}>
            <div className="card-text">
                Learn More!
            </div>
          </div>
        </Fragment>
      )
  }

}


export default LearnMoreCard