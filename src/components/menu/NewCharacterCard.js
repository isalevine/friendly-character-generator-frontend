import React, {Component, Fragment} from 'react'

import NewCharacterButton from './NewCharacterButton'


class NewCharacterCard extends Component {

  render() {
      return (
          <Fragment>
          <div className="card card-form" style={this.props.style}>
            <div className="card-text">
                Create a New Character!
            </div>

            <NewCharacterButton history={this.props.history}/>
          </div>
        </Fragment>
      )
  }

}


export default NewCharacterCard