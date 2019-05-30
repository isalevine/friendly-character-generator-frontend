import React, {Component, Fragment} from 'react'

import {API_URL, CONVERTER_URL, HEADERS} from '../constants/index'

import CardDeck from '../components/cards/CardDeck'
// import BlankCard from '../components/cards/BlankCard'
import ClickHereMessage from '../components/cards/ClickHereMessage'

// import TestForm from '../components/forms/TestForm'
import StatForm from '../components/forms/StatForm'
// import PhysicalStatForm from '../components/forms/PhysicalStatForm'
// import MentalStatForm from '../components/forms/MentalStatForm'
// import SocialStatForm from '../components/forms/SocialStatForm'
import PowerForm from '../components/forms/PowerForm'
// import FilterForm from '../components/forms/FilterForm'
import SearchPreferenceOutput from '../components/forms/SearchPreferenceOutput'
import SearchListResults from '../components/forms/SearchListResults'
import FoundArchetypeOutput from '../components/forms/FoundArchetypeOutput'
import ConvertedCharacter from '../components/characters/ConvertedCharacter'
import ExtendedCharacter from '../components/characters/ExtendedCharacter'
import CardFloatingIsland from '../components/art/CardFloatingIsland'
import DeckFloatingIsland from '../components/art/DeckFloatingIsland'



// change "physical" to "fight" as part of playstyle refactoring??
// (because "spells" are part of the "physical" category right now...)

// REFACTOR ALL THIS.STATE NESTED KEYS TO BE CAMEL-CASED??
// (originally done as snake-case to match Rails database column-names...)

// REFACTOR FormContainer TO BE MainContainer??
// (or something else more general...maybe CardContainer??)
// ...I think this will end up holding state for BOTH forms & characters...

class NewCharacterFormContainer extends Component {

  constructor() {
    super()
    this.state = {
      drawFormCards: true,
      drawCharacterCards: false,
      flipCard1: false,
      flipCard2: false,
      flipCard3: false,
      flipCard4: false,
      nextCard: 1,

      formSearchPreference: {
        playstyle_preference: "",
        action_preference: "",
        stat_preference: "",
        power_preference: "",
      },
      matchedSearchList: {
        match_found: false,
        archetype_id: null,
        search_playstyle_pref: "",
        search_action_pref: "",
        search_power_pref: "",
      },

      foundArchetype: null,
      loadedGameSystems: [],
      convertedCharacters: [],
      backstoriesGenerated: false,
      showExtendedCharacter: false,

    }
    this.flipCard = this.flipCard.bind(this)
    this.fetchGameSystem = this.fetchGameSystem.bind(this)
    this.changeSearchPreference = this.changeSearchPreference.bind(this)
    this.createSearchPreference = this.createSearchPreference.bind(this)
    this.disableForms = this.disableForms.bind(this)
    this.fetchSearchList = this.fetchSearchList.bind(this)
    this.randomSearchList = this.randomSearchList.bind(this)
    this.fetchArchetype = this.fetchArchetype.bind(this)
    this.displayFlippedFormCards = this.displayFlippedFormCards.bind(this)
    this.displaySearchPreferenceOutput = this.displaySearchPreferenceOutput.bind(this)
    this.displaySearchListResults = this.displaySearchListResults.bind(this)
    this.displayFoundArchetypeOutput = this.displayFoundArchetypeOutput.bind(this)
    this.displayFlippedCharacterCards = this.displayFlippedCharacterCards.bind(this)
    this.displayExtendedCharacterCards = this.displayExtendedCharacterCards.bind(this)
    this.changeShowExtendedCharacter = this.changeShowExtendedCharacter.bind(this)
  }

  // fetch GameSystem on first load
  componentDidMount() {
    if (this.state.loadedGameSystems.length === 0) {
      this.fetchGameSystem()
    }
  }

  // fetch Converter to create finalized characters, IF state has game_system + output_character + archetype
   componentDidUpdate() {
    // refactor: break fetch into its own separate function?
    if (this.state.loadedGameSystems.length > 0 && this.state.foundArchetype) {
      // debugger
      console.log("ready to post to converter!!")
      console.log("loadedGameSystems[0]: ", this.state.loadedGameSystems[0])
      // HARDCODED: only sending this.state.loadedGameSystems[0], which is DnD--will need an iterator, plus a way to handle multiple simultaneous fetches...
      let url = CONVERTER_URL + "/archetype_system_converter"
      let config = {
        method: "POST",
        headers: HEADERS,
        body: JSON.stringify({
          archetype: this.state.foundArchetype,
          game_system: this.state.loadedGameSystems[0]
        })
      };
      fetch(url, config)
      .then(res => res.json())
      .then(convertedCharacter => {
        console.log("convertedCharacter: ", convertedCharacter)
        // let finishedCharacter = this.fetchBackstory(convertedCharacter)
          this.setState({
          foundArchetype: null,
          convertedCharacters: [...this.state.convertedCharacters, convertedCharacter]
        })
      }) 
    }
  }



  flipCard(num) {
    // console.log("click detected, executing flipCard()...")
    // console.log(num)
    if (num <= 4) {
      let card = "flipCard" + num
      let nextNum = num + 1
      this.setState({
        [card]: true,
        nextCard: nextNum
      })
    }
  }

  // HARD-CODED (refactor needed): fetches all game systems, will eventually need to load only those specified by App (dropdown menu in navbar??)
  // ALSO: refactor different fetches/etc. into more modular functions!!
  fetchGameSystem() {
    console.log("executing fetchGameSystem...")
    let url = API_URL + "/game_systems"
    fetch(url)
    .then(res => res.json())
    .then(game_systems => {
      console.log("data from fetchGameSystem(): ", game_systems)
      let newGameSystems = []

      // format objects as: { game_system: {}, output_character: {} }
      for (let i = 0; i < game_systems.length; i++) {
        let game_system = game_systems[i]
        let url = CONVERTER_URL + "/generate_output_character"
        let config = {
          method: "POST",
          headers: HEADERS,
          body: JSON.stringify({game_system: game_system})
        }
        console.log("config: ", config)
        fetch(url, config)
        .then(res => res.json())
        .then(output_character => {
          console.log("returned output_character: ", output_character)
          let newGameSystem = {
            game_system: game_system,
            output_character: output_character
          };
          newGameSystems.push(newGameSystem)
        })
      }

      this.setState({loadedGameSystems: newGameSystems})
    })
  }




  changeSearchPreference(preference, value) {
    // console.log("executing changeSearchPreference...")
    // console.log("preference: ", preference)
    // console.log("value", value)
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
    // console.log("formSearchPreference: ", formSearchPreference)
    let url = API_URL + "/search_preferences"
    let config = {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify(formSearchPreference)
    }

    fetch(url, config)
    .then(res => res.json())
    .then(data => {
      console.log("SearchPreference created! returned data: ", data)

      this.disableForms()

      this.fetchSearchList()
    })
  }


  disableForms() {
    let forms = Array.from(document.getElementsByClassName("card-form"))
    forms.forEach(form => {
      form.classList.add("unclickable")
      form.style.transition = "2s linear"
      form.style.left = "6px"
    })
    // let div = document.getElementById('deck-click-here-box')
    // div.classList.add('fadeout-effect')
  }


  async fetchSearchList() {
    console.log("executing fetchSearchList()...")

    let url = API_URL + "/search_lists"
    await fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log("all searchLists data: ", data)

      // REFACTOR! this logic belongs on the backend (eventually...)
      let SearchLists = [];
      data.forEach(search_list => {
        if (search_list.search_playstyle_pref.includes(this.state.formSearchPreference.playstyle_preference) &&
        search_list.search_action_pref.includes(this.state.formSearchPreference.action_preference) &&
        (search_list.search_power_pref.includes(this.state.formSearchPreference.power_preference) || search_list.search_power_pref === "any")
       ) {
         // console.log("Match found! search_list: ", search_list)
         SearchLists.push(search_list)
        }
      })

      console.log("SearchLists: ", SearchLists) // LEFT OFF HERE!!

      let randomSearchList = this.randomSearchList(SearchLists);
      randomSearchList["match_found"] = true;
      this.setState({matchedSearchList: randomSearchList})
    })
    await this.fetchArchetype()
  }


  randomSearchList(SearchLists) {
    let num = Math.floor(Math.random() * SearchLists.length)
    return SearchLists[num]
  }


  fetchArchetype() {
    console.log("executing fetchArchetype...")

    let url = API_URL + "/archetypes"
    fetch(url)
    .then(res => res.json())
    .then(archetypes => {
      // REFACTOR: currently fetches ALL archetypes...any way to narrow down early?
      console.log("fetchArchetype data: ", archetypes)

      let foundArchetype = archetypes.find(archetype => {
        return archetype.id === this.state.matchedSearchList.archetype_id
      })
      // foundArchetype["archetype_found"] = true;
      this.setState({foundArchetype: foundArchetype})
    })
  }





  displayCardDeck() {
    return (
      <div className="deck-of-cards">
        <CardDeck style={{"top": "0px", "left": "0px", "zIndex": 2}} />
        <CardDeck style={{"top": "6px", "left": "5px", "zIndex": 3}} />
        <CardDeck style={{"top": "12px", "left": "10px", "zIndex": 5}} />
        <CardDeck style={{"top": "18px", "left": "15px", "zIndex": 6}} />
          <ClickHereMessage
            style={{"position": "absolute", "top": "0px", "left": "0px", "zIndex": 6}}
            flipCard={this.flipCard}
            nextCard={this.state.nextCard}
            fetchGameSystem={this.fetchGameSystem}
            convertedCharacters={this.state.convertedCharacters}
            history={this.props.history}
          />

          <DeckFloatingIsland style={{"top": 380, "left": -37}} />
      </div>
    )
  }


  displayFlippedFormCards() {
    if (this.state.drawFormCards) {
      let card1, card2, card3, card4;
      if (this.state.flipCard1) {
        card1 = <StatForm style={{"top": 6, "left": 300}}
          nextCard={this.state.nextCard}
          flipCard={this.flipCard}
          formSearchPreference={this.state.formSearchPreference}
          changeSearchPreference={this.changeSearchPreference}
        />
      }
      if (this.state.flipCard2) {
        card2 = <PowerForm style={{"top": 6, "left": 570}}
          nextCard={this.state.nextCard}
          flipCard={this.flipCard}
          formSearchPreference={this.state.formSearchPreference}
          changeSearchPreference={this.changeSearchPreference}
          createSearchPreference={this.createSearchPreference}
        />
      }
      // if (this.state.flipCard3) {
      //   card3 = <BlankCard style={{"top": 6, "left": 840}} />
      // }
      // if (this.state.flipCard4) {
      //   card4 = <BlankCard style={{"top": 6, "left": 1110}} />
      // }

      let island1 = <CardFloatingIsland style={{"top": 390, "left": 290}}/>
      let island2 = <CardFloatingIsland style={{"top": 390, "left": 560}}/>
      let island3 = <CardFloatingIsland style={{"top": 390, "left": 830}}/>

      return (
        <Fragment>
          {card1}
          {card2}
          {card3}
          {card4}

          {island1}
          {island2}
          {island3}
        </Fragment>
      )
    }

  }


  displaySearchPreferenceOutput() {
    return (
      <SearchPreferenceOutput
        style={{"position": "absolute", "left": 1280, "top": 460}}
        formSearchPreference={this.state.formSearchPreference}
      />
    )
  }


  // originally: style={{"position": "absolute", "left": 440, "top": 460}}
  displaySearchListResults() {
    // let searchListResults;
    if (this.state.matchedSearchList.match_found) {
      return (
        <SearchListResults
          style={{"position": "absolute", "left": 1280, "top": 660}}
          SearchList={this.state.matchedSearchList}
        />
      )
    }
  }


  displayFoundArchetypeOutput() {
    console.log("inside displayFoundArchetypeOutput()...")
    console.log("current this.state.foundArchetype: ", this.state.foundArchetype)
    if (this.state.foundArchetype) {
      return (
        <FoundArchetypeOutput
          style={{"position": "absolute", "left": 800, "top": 460}}
          foundArchetype={this.state.foundArchetype}
        />
      )
    }
  }


  displayFlippedCharacterCards() {
    let card3;
    // HARDCODED to only render 1 card, with only convertedCharacters[0]
    if (this.state.convertedCharacters.length > 0) {
      card3 = <ConvertedCharacter style={{"top": 6, "left": 840}}
        convertedCharacter={this.state.convertedCharacters[0]}
        changeShowExtendedCharacter={this.changeShowExtendedCharacter}
      />
    }

    return (
      <Fragment>
        {card3}
      </Fragment>
    )
  }


  displayExtendedCharacterCards() {
    let card2;
    // HARDCODED to only render 1 card, with only convertedCharacters[0], at card2 location (left: 570)
    if (this.state.convertedCharacters.length > 0 && this.state.showExtendedCharacter) {
      card2 = <ExtendedCharacter style={{"top": 6, "left": 300}}
        convertedCharacter={this.state.convertedCharacters[0]}
      />
    }

    return (
      <Fragment>
        {card2}
      </Fragment>
    )
  }


  changeShowExtendedCharacter() {
    this.setState({showExtendedCharacter: true})
  }


  


  render() {

    return (
      <div id="new-character-form-container" className="container">

        {this.displayCardDeck()}

        {this.displayFlippedFormCards()}

        {this.displayFlippedCharacterCards()}

        {this.displayExtendedCharacterCards()}
        
      </div>
    )
  }

}

// {this.displaySearchPreferenceOutput()}

// {this.displaySearchListResults()}

// {this.displayFoundArchetypeOutput()}

export default NewCharacterFormContainer
