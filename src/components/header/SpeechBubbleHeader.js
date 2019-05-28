import React, {Component, Fragment} from 'react'

import MageFloatingIsland from '../art/MageFloatingIsland'


class SpeechBubbleHeader extends Component {

    render() {
        return (
            <Fragment>
                <div className="speech-bubble header">
                    <h3>Welcome to Friendly Character Generator!</h3>
                    I am currently generating characters for: <strong>Dungeons and Dragons, 5th Edition. </strong>
                    To begin creating a new character, click the <strong>"Create New Character!"</strong> button below.
                
                    <MageFloatingIsland />
                </div>
            </Fragment>
        )
    }

}

export default SpeechBubbleHeader


{/* <p><strong>Welcome to Friendly Character Generator! Need a new DnD 5th Edition character? We got you covered!</strong></p>
<strong>To begin creating a new Dungeons and Dragons character, click the "Create New Character!" button below.</strong> */}