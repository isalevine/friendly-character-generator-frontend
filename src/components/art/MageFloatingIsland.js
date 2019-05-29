import React, {Component, Fragment} from 'react'

import Mage from './Mage'


class MageFloatingIsland extends Component {

    render() {
        return (
            <Fragment>
                <img id="mage-floating-island" src="../../pixel-art/floating-island-3-edited.png" />

                <Mage />
            </Fragment>
        )
    }

}

export default MageFloatingIsland