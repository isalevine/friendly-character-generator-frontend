import React, {Component, Fragment} from 'react'

import TestForm from '../components/forms/TestForm'
import StatForm from '../components/forms/StatForm'
import PhysicalStatForm from '../components/forms/PhysicalStatForm'
import MentalStatForm from '../components/forms/MentalStatForm'
import SocialStatForm from '../components/forms/SocialStatForm'
import PowerForm from '../components/forms/PowerForm'
import FilterForm from '../components/forms/FilterForm'
import CardDeck from '../components/forms/CardDeck'
import BlankCard from '../components/forms/BlankCard'
import ClickHereMessage from '../components/forms/ClickHereMessage'
import SearchPreferenceOutput from '../components/forms/SearchPreferenceOutput'


class FormContainer extends Component {

  constructor() {
    super()
    this.state = {
      formSearchPreference: {
        playstyle_preference: "",
        action_preference: "",
        stat_preference: "",
        power_preference: ""
      },
      flipCard1: false,
      flipCard2: false,
      flipCard3: false,
      flipCard4: false,
      nextCard: 1
    }
    this.flipCard = this.flipCard.bind(this)
    this.changeSearchPreference = this.changeSearchPreference.bind(this)
    this.createSearchPreference = this.createSearchPreference.bind(this)
  }




  flipCard(num) {
    console.log("click detected, executing flipCard()...")
    console.log(num)
    if (num <= 4) {
      let card = "flipCard" + num
      let nextNum = num + 1
      this.setState({
        [card]: true,
        nextCard: nextNum
      })
    }
  }




  changeSearchPreference(preference, value) {
    console.log("executing changeSearchPreference...")
    console.log("preference: ", preference)
    console.log("value", value)
    let obj = {...this.state.formSearchPreference}
    obj[preference] = value
    this.setState({formSearchPreference: obj})

    if (this.state.formSearchPreference.playstyle_preference !== "" &&
      this.state.formSearchPreference.action_preference !== "") {
        this.calculateStatPreference()
      }
  }





  createSearchPreference(formSearchPreference) {
    console.log("formSearchPreference: ", formSearchPreference)
    let url = "http://localhost:3000/api/v1/" + "/search_preferences"
    let config = {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formSearchPreference)
    }

    fetch(url, config)
    .then(res => res.json())
    .then(data => {
      console.log("data: ", data)
    })
  }




  render() {

    let card1, card2, card3, card4;
    if (this.state.flipCard1) {
      card1 = <StatForm style={{"gridColumnStart": 36}}
        nextCard={this.state.nextCard}
        flipCard={this.flipCard}
        formSearchPreference={this.state.formSearchPreference}
        changeSearchPreference={this.changeSearchPreference}
      />
    }
    if (this.state.flipCard2) {
      card2 = <PowerForm style={{"gridColumnStart": 63}}
        nextCard={this.state.nextCard}
        flipCard={this.flipCard}
        formSearchPreference={this.state.formSearchPreference}
        changeSearchPreference={this.changeSearchPreference}
        createSearchPreference={this.createSearchPreference}
      />
    }
    if (this.state.flipCard3) {
      card3 = <BlankCard style={{"gridColumnStart": 90}} />
    }
    if (this.state.flipCard4) {
      card4 = <BlankCard style={{"gridColumnStart": 117}} />
    }

    return (
      <Fragment>
        <div className="deck-of-cards">
          <CardDeck style={{"gridColumnStart": 6, "top": "0px", "left": "0px", "zIndex": 1}} />
          <CardDeck style={{"gridColumnStart": 6, "top": "6px", "left": "5px", "zIndex": 2}} />
          <CardDeck style={{"gridColumnStart": 6, "top": "12px", "left": "10px", "zIndex": 4}} />
          <CardDeck style={{"gridColumnStart": 6, "top": "18px", "left": "15px", "zIndex": 5}} />
            <ClickHereMessage
              style={{"gridColumnStart": 6, "top": "0px", "left": "0px", "zIndex": 6}}
              flipCard={this.flipCard}
              nextCard={this.state.nextCard}
            />
        </div>

        {card1}
        {card2}
        {card3}
        {card4}


        <SearchPreferenceOutput style={{"gridColumnStart": 8, "gridRowStart": 46}}
          formSearchPreference={this.state.formSearchPreference}
        />

      </Fragment>
    )
  }

}


export default FormContainer
