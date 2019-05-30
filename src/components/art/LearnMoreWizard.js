import React, {Component, Fragment} from 'react'


class LearnMoreWizard extends Component {

    render() {
        return (
        <Fragment>
            <img className="card-art" alt="etch-drawing scholar" src="../../public-domain-art/wizard-sigh.jpg" style={this.props.style}/>
        </Fragment>
        )
    }

}

export default LearnMoreWizard