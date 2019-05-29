import React, {Component, Fragment} from 'react'


class CharacterPortrait extends Component {

    render() {
        return (
            <Fragment>
                <img className="character-portrait" src={this.props.img_url} />
            </Fragment>
        )
    }

}

export default CharacterPortrait