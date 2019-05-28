import React, {Component, Fragment} from 'react'


class LearnMoreButton extends Component {



    handleClick = () => {
        this.props.toggleDisplayFullSize()
    }



    render() {
        return (
            <Fragment>
                <button id="learn-more-button" onClick={this.handleClick.bind(this)}>Learn More!</button>
            </Fragment>
        )
    }

}

export default LearnMoreButton