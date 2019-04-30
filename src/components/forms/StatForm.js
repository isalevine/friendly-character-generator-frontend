import React, {Component, Fragment} from 'react'

import PhysicalStatForm from './PhysicalStatForm'
import MentalStatForm from './MentalStatForm'
import SocialStatForm from './SocialStatForm'


class StatForm extends Component {

  handleChange = (ev) => {
    this.props.changeSearchPreference("playstyle_preference", ev.target.value)
  }
  

  render() {

    let selectedStatForm = <Fragment />;
    if (this.props.formSearchPreference.playstyle_preference === "physical") {
      selectedStatForm = <PhysicalStatForm
        nextCard={this.props.nextCard}
        flipCard={this.props.flipCard}
        changeSearchPreference={this.props.changeSearchPreference}
      />
    }
    else if (this.props.formSearchPreference.playstyle_preference === "mental") {
      selectedStatForm = <MentalStatForm
        nextCard={this.props.nextCard}
        flipCard={this.props.flipCard}
        changeSearchPreference={this.props.changeSearchPreference}
      />
    }
    else if (this.props.formSearchPreference.playstyle_preference === "social") {
      selectedStatForm = <SocialStatForm
        nextCard={this.props.nextCard}
        flipCard={this.props.flipCard}
        changeSearchPreference={this.props.changeSearchPreference}
      />
    }

    return (
      <Fragment>
        <div className="card" style={this.props.style}>
          <div className="card-text">
            <form id="select-stat-form" onChange={this.handleChange}>
              1. When playing, I prefer to...<br />
              <input type="radio" name="select-stat-form" value="physical" />fight!<br />
              <input type="radio" name="select-stat-form" value="mental" />think and solve puzzles!<br />
              <input type="radio" name="select-stat-form" value="social" />talk as my character!<br />
            </form>

            <br />

            <div className="card-subtext">
              {selectedStatForm}
            </div>

          </div>
        </div>
      </Fragment>
    )
  }

}


export default StatForm
