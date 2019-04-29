import React, {Component, Fragment} from 'react'

import TestForm from '../components/forms/TestForm'
import StatForm from '../components/forms/StatForm'
import PhysicalStatForm from '../components/forms/PhysicalStatForm'
import MentalStatForm from '../components/forms/MentalStatForm'
import SocialStatForm from '../components/forms/SocialStatForm'
import PowerForm from '../components/forms/PowerForm'
import FilterForm from '../components/forms/FilterForm'
import CardDeck from '../components/forms/CardDeck'
import SearchListOutput from '../components/forms/SearchListOutput'


class FormContainer extends Component {

  constructor() {
    super()
    this.state = {
      formSearchList: {

      }
    }
  }

  render() {
    return (
      <Fragment>

        <CardDeck style={{"gridColumnStart": 6}} />
        <CardDeck style={{"gridColumnStart": 6}} />
        <CardDeck style={{"gridColumnStart": 6}} />
        <CardDeck style={{"gridColumnStart": 6}} />
        <StatForm style={{"gridColumnStart": 36}} />
        <PowerForm style={{"gridColumnStart": 63}} />

        <SearchListOutput style={{"gridColumnStart": 8, "gridRowStart": 46}} />

      </Fragment>
    )
  }

}


export default FormContainer
