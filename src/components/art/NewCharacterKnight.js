import React, {Component, Fragment} from 'react'


class NewCharacterKnight extends Component {

    render() {
        return (
        <Fragment>
            <img className="card-art" src="../../public-domain-art/grey-dolphin.jpg" style={this.props.style}/>
        </Fragment>
        )
    }

}

export default NewCharacterKnight