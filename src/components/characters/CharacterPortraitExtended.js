import React, {Component, Fragment} from 'react'


class CharacterPortraitExtended extends Component {

    render() {
        return (
            <Fragment>
                <img className="character-portrait-extended" src={this.props.img_url} />
            </Fragment>
        )
    }

}

export default CharacterPortraitExtended