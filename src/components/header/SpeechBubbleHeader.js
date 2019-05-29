import React, {Component, Fragment} from 'react'

import MageFloatingIsland from '../art/MageFloatingIsland'


class SpeechBubbleHeader extends Component {

    render() {
        return (
            <Fragment>
                <div className="speech-bubble header">
                    <h3>Welcome to Friendly Character Generator!</h3>
                    I am currently generating characters for: <strong>Dungeons and Dragons, 5th Edition. </strong>
                    To begin, click the <strong>"Create New Character!"</strong> button below.
                
                    <MageFloatingIsland />
                </div>
            </Fragment>
        )
    }

}

export default SpeechBubbleHeader