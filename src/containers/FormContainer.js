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
import SearchListOutput from '../components/forms/SearchListOutput'


class FormContainer extends Component {

  constructor() {
    super()
    this.state = {
      formSearchList: {
        stat_preference: "",
        action_preference: "",
        power_preference: ""
      },
      flipCard1: false,
      flipCard2: false,
      flipCard3: false,
      flipCard4: false,
      nextCard: 1
    }
    this.flipCard = this.flipCard.bind(this)
    this.changeSearchList = this.changeSearchList.bind(this)
    this.createSearchList = this.createSearchList.bind(this)
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

  changeSearchList(preference, value) {
    let obj = {...this.state.formSearchList}
    obj[preference] = value
    this.setState({formSearchList: obj})
  }

  createSearchList(formObject) {
    // export finalized this.state.formSearchList
    // to create a new SearchList instance
  }


  render() {

    let card1, card2, card3, card4;
    if (this.state.flipCard1) {
      card1 = <StatForm style={{"gridColumnStart": 36}}
        nextCard={this.state.nextCard}
        flipCard={this.flipCard}
        formSearchList={this.state.formSearchList}
        changeSearchList={this.changeSearchList}
      />
    }
    if (this.state.flipCard2) {
      card2 = <PowerForm style={{"gridColumnStart": 63}}
        nextCard={this.state.nextCard}
        flipCard={this.flipCard}
        changeSearchList={this.changeSearchList}
        createSearchList={this.createSearchList}
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


        <SearchListOutput style={{"gridColumnStart": 8, "gridRowStart": 46}}
          formSearchList={this.state.formSearchList}
        />

      </Fragment>
    )
  }

}


export default FormContainer
