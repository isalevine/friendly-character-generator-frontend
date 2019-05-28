import React, {Component, Fragment} from 'react'

import MageFloatingIsland from '../art/MageFloatingIsland'


class SpeechBubbleHeader extends Component {

    render() {
        return (
            <Fragment>
                <div className="speech-bubble header">
                    <p><strong>Welcome to Friendly Character Generator! Need a new DnD 5th Edition character? We got you covered!</strong></p>
                    <strong>To begin creating a new Dungeons and Dragons character, click the deck below.</strong>
                
                    <MageFloatingIsland />
                </div>
            </Fragment>
        )
    }

}

export default SpeechBubbleHeader