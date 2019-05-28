import React, {Component, Fragment} from 'react'


class NewCharacterButton extends Component {

    handleClick = () => {
        this.props.history.push('/new_character')
    }

    render() {
        return (
            <Fragment>
                <button id="new-character-button" onClick={this.handleClick.bind(this)}>Create New Character!</button>
            </Fragment>
        )
    }

}

export default NewCharacterButton