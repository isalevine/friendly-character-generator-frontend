import React, {Component, Fragment} from 'react'

import PhysicalStatForm from './PhysicalStatForm'
import MentalStatForm from './MentalStatForm'
import SocialStatForm from './SocialStatForm'


class StatForm extends Component {

  handleChange = (ev) => {
    this.props.changeSearchPreference("playstyle_preference", ev.target.value)
  }


  calculateStatPreference = () => {
    let {playstyle_preference: playstyle, action_preference: action} = this.props.formSearchPreference
    let stat;

    console.log("executing calculateStatPreference...")
    console.log("playstyle: ", playstyle)
    console.log("action: ", action)

    if (playstyle === "physical") {
      if (action === "weapon") {
        stat = "strength"
      }
      else if (action === "tank") {
        stat = "stamina"
      }
      else if (action === "sneak") {
        stat = "dexterity"
      }
      else if (action === "spells") {
        stat = "wisdom"
      }
    }

    else if (playstyle === "mental") {
      if (action === "spells") {
        stat = "wisdom"
      }
      else if (action === "investigate") {
        stat = "wisdom"
      }
      else if (action === "knowledge") {
        stat = "intelligence"
      }
    }

    else if (playstyle === "social") {
      if (action === "leader") {
        stat = "wisdom"
      }
      else if (action === "perform") {
        stat = "wisdom"
      }
      else if (action === "manipulate") {
        stat = "intelligence"
      }
      else if (action === "seduce") {
        stat = "intelligence"
      }
    }

    this.props.changeSearchPreference("stat_preference", stat)
  }



  render() {

    let selectedStatForm = <Fragment />;
    if (this.props.formSearchPreference.playstyle_preference === "physical") {
      selectedStatForm = <PhysicalStatForm
        nextCard={this.props.nextCard}
        flipCard={this.props.flipCard}
        changeSearchPreference={this.props.changeSearchPreference}
        calculateStatPreference={this.calculateStatPreference}
      />
    }
    else if (this.props.formSearchPreference.playstyle_preference === "mental") {
      selectedStatForm = <MentalStatForm
        nextCard={this.props.nextCard}
        flipCard={this.props.flipCard}
        changeSearchPreference={this.props.changeSearchPreference}
        calculateStatPreference={this.calculateStatPreference}
      />
    }
    else if (this.props.formSearchPreference.playstyle_preference === "social") {
      selectedStatForm = <SocialStatForm
        nextCard={this.props.nextCard}
        flipCard={this.props.flipCard}
        changeSearchPreference={this.props.changeSearchPreference}
        calculateStatPreference={this.calculateStatPreference}
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
