import React, {Component, Fragment} from 'react'

import NewCharacterButton from './NewCharacterButton'
import NewCharacterKnight from '../art/NewCharacterKnight'


class NewCharacterCard extends Component {

  render() {
      return (
          <Fragment>
          <div className="card card-form" style={this.props.style}>
            <div className="card-text">
                <strong>Create a New Character!</strong>
            </div>
            <NewCharacterKnight />
            <NewCharacterButton history={this.props.history}/>
          </div>
        </Fragment>
      )
  }

}


export default NewCharacterCard