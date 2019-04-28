import React, {Component, Fragment} from 'react'

import PhysicalStatForm from './PhysicalStatForm'
import MentalStatForm from './MentalStatForm'
import SocialStatForm from './SocialStatForm'


class StatForm extends Component {

  constructor() {
    super()
    this.state = {
      selectedStat: null
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(ev) {
    this.setState({selectedStat: ev.target.value})
  }


  render() {

    let selectedStatForm = <Fragment />;
    if (this.state.selectedStat === "physical") {
      selectedStatForm = <PhysicalStatForm />
    }
    else if (this.state.selectedStat === "mental") {
      selectedStatForm = <MentalStatForm />
    }
    else if (this.state.selectedStat === "social") {
      selectedStatForm = <SocialStatForm />
    }

    return (
      <Fragment>
        <form id="select-stat-form" onChange={this.handleChange}>
          1. When playing, I prefer to...<br />
          <input type="radio" name="select-stat-form" value="physical" />fight!<br />
          <input type="radio" name="select-stat-form" value="mental" />think and solve puzzles!<br />
          <input type="radio" name="select-stat-form" value="social" />talk as my character!<br />
        </form>

        {selectedStatForm}

      </Fragment>
    )
  }

}


export default StatForm
