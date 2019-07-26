import React, {Component, Fragment} from 'react'


class NewCharacterButton extends Component {

    handleClick = () => {
        this.props.disableForms()
        
        setTimeout( () => this.props.history.push('/new_character'), 2000)
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