import React, {Component, Fragment} from 'react'


class CardFloatingIsland extends Component {

    render() {
        return (
        <Fragment>
            <img className="card-floating-island" alt="pixel-art floating island" src="../../pixel-art/floating-island-2-edited.png" style={this.props.style}/>
        </Fragment>
        )
    }

}

export default CardFloatingIsland