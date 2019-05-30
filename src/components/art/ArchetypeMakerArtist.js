import React, {Component, Fragment} from 'react'


class ArchetypeMakerArtist extends Component {

    render() {
        return (
        <Fragment>
            <img className="card-art" alt="etch-drawing sculptor" src="../../public-domain-art/pressure-fingers.jpg" style={this.props.style}/>
        </Fragment>
        )
    }

}

export default ArchetypeMakerArtist