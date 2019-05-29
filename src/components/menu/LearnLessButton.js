import React, {Component, Fragment} from 'react'


class LearnLessButton extends Component {



    handleClick = () => {
        this.props.toggleDisplayFullSize()
    }



    render() {
        return (
            <Fragment>
                <button id="learn-less-button" onClick={this.handleClick.bind(this)}>OK, I got it!</button>
            </Fragment>
        )
    }

}

export default LearnLessButton