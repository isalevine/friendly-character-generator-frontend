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
import SearchListResults from '../components/forms/SearchListResults'
import FoundArchetypeOutput from '../components/forms/FoundArchetypeOutput'


// change "physical" to "fight" as part of playstyle refactoring??
// (because "spells" are part of the "physical" category right now...)

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
      matchedSearchList: {
        matchFound: false,
        search_playstyle_pref: "",
        search_action_pref: "",
        search_power_pref: ""
      },
      flipCard1: false,
      flipCard2: false,
      flipCard3: false,
      flipCard4: false,
      nextCard: 1,

    }
    this.flipCard = this.flipCard.bind(this)
    this.changeSearchPreference = this.changeSearchPreference.bind(this)
    this.createSearchPreference = this.createSearchPreference.bind(this)
    this.fetchSearchList = this.fetchSearchList.bind(this)
    this.randomSearchList = this.randomSearchList.bind(this)
    this.fetchArchetype = this.fetchArchetype.bind(this)
    this.displayFlippedCards = this.displayFlippedCards.bind(this)
    this.displaySearchPreferenceOutput = this.displaySearchPreferenceOutput.bind(this)
    this.displaySearchListResults = this.displaySearchListResults.bind(this)
    this.displayFoundArchetypeOutput = this.displayFoundArchetypeOutput.bind(this)
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
    let newSearchPreference = {...this.state.formSearchPreference}
    newSearchPreference[preference] = value

    if (preference === "playstyle_preference") {
      newSearchPreference["action_preference"] = ""
      newSearchPreference["stat_preference"] = ""
    }
    else if (preference === "action_preference") {
      newSearchPreference["stat_preference"] = this.calculateStatPreference(newSearchPreference)
    }

    this.setState({formSearchPreference: newSearchPreference})
  }

  calculateStatPreference = (newSearchPreference) => {
    let {playstyle_preference: playstyle, action_preference: action} = newSearchPreference
    let stat;

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
        stat = "charisma"
      }
      else if (action === "perform") {
        stat = "charisma"
      }
      else if (action === "manipulate") {
        stat = "charisma"
      }
      else if (action === "seduce") {
        stat = "charisma"
      }
    }
    else {
      stat = ""
    }

    return stat
  }





  createSearchPreference(formSearchPreference) {
    console.log("formSearchPreference: ", formSearchPreference)
    let url = "http://localhost:3000/" + "/search_preferences"
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
      console.log("SearchPreference created! returned data: ", data)
      this.fetchSearchList()
    })
  }



  fetchSearchList() {
    console.log("executing fetchSearchList()...")

    let url = "http://localhost:3000/" + "/search_lists"
    fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log("all searchLists data: ", data)

      let SearchLists = [];
      data.forEach(search_list => {
        if (search_list.search_playstyle_pref.includes(this.state.formSearchPreference.playstyle_preference) &&
        search_list.search_action_pref.includes(this.state.formSearchPreference.action_preference) &&
        (search_list.search_power_pref.includes(this.state.formSearchPreference.power_preference) ||
         search_list.search_power_pref === "any")
       ) {
         // console.log("Match found! search_list: ", search_list)
         SearchLists.push(search_list)
        }
      })

      console.log("SearchLists: ", SearchLists) // LEFT OFF HERE!!

      let randomSearchList = this.randomSearchList(SearchLists);
      randomSearchList["foundList"] = true;
      this.setState({matchedSearchList: randomSearchList})
    })
  }

  randomSearchList(SearchLists) {
    let num = Math.floor(Math.random() * SearchLists.length)
    return SearchLists[num]
  }

  fetchArchetype() {
    console.log("executing fetchArchetype...")
  }





  displayCardDeck() {
    return (
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
    )
  }


  displayFlippedCards() {
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
        {card1}
        {card2}
        {card3}
        {card4}
      </Fragment>
    )
  }


  displaySearchPreferenceOutput() {
    return (
      <SearchPreferenceOutput style={{"gridColumnStart": 8, "gridRowStart": 46}}
        formSearchPreference={this.state.formSearchPreference}
      />
    )
  }


  displaySearchListResults() {
    let searchListResults;
    if (this.state.matchedSearchList.foundList) {
      return (
        <SearchListResults
          style={{"gridColumnStart": 44, "gridRowStart": 46}}
          SearchList={this.state.matchedSearchList}
        />
      )
    }
  }


  displayFoundArchetypeOutput() {
    return (
      <FoundArchetypeOutput
        style={{"gridColumnStart": 74, "gridRowStart": 46}}
      />
    )
  }


  render() {

    return (
      <Fragment>

        {this.displayCardDeck()}

        {this.displayFlippedCards()}

        {this.displaySearchPreferenceOutput()}

        {this.displaySearchListResults()}

      </Fragment>
    )
  }

}


export default FormContainer
