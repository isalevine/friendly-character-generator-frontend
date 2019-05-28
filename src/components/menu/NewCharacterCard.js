import React, {Component, Fragment} from 'react'


class NewCharacterCard extends Component {

  render() {
      return (
          <Fragment>
          <div className="card card-form" style={this.props.style}>
            <div className="card-text">
                Create a New Character!
            </div>
          </div>
        </Fragment>
      )
  }

}


export default NewCharacterCard