import React, {Component, Fragment} from 'react'

import CardDeck from '../components/cards/CardDeck'
import NewCharacterCard from '../components/menu/NewCharacterCard'
import LearnMoreCard from '../components/menu/LearnMoreCard'
import UserLoginCard from '../components/menu/UserLoginCard'
import CardFloatingIsland from '../components/art/CardFloatingIsland'
import DeckFloatingIsland from '../components/art/DeckFloatingIsland'


// lots of functions are copied from NewCharacterFormContainer,
// consider refactoring to pass as props instead?

class MainMenuContainer extends Component {

  disableForms() {
    let forms = Array.from(document.getElementsByClassName("card-form"))
    forms.forEach(form => {
      form.classList.add("unclickable")
      form.style.transition = "2s linear"
      form.style.left = "6px"
    })
    let div = document.getElementById('deck-click-here-box')
    div.classList.add('fadeout-effect')
  }


    displayCardDeck = () => {
        return (
            <div className="deck-of-cards">
                <CardDeck style={{"top": "0px", "left": "0px", "zIndex": 2}} />
                <CardDeck style={{"top": "6px", "left": "5px", "zIndex": 3}} />
                <CardDeck style={{"top": "12px", "left": "10px", "zIndex": 5}} />
                <CardDeck style={{"top": "18px", "left": "15px", "zIndex": 6}} />

                <DeckFloatingIsland style={{"top": 380, "left": -37}} />
            </div>
        )
    }

    displayNewCharacterCard() {
        let card1 = <NewCharacterCard style={{"top": 6, "left": 300}} history={this.props.history}/>
        let island1 = <CardFloatingIsland style={{"top": 400, "left": 320}}/>
        return (
          <Fragment>
            {card1}
            {island1}
          </Fragment>
        )
    }

    displayLearnMoreCard() {
        let card2 = <LearnMoreCard style={{"top": 6, "left": 570}}/>
        let island2 = <CardFloatingIsland style={{"top": 400, "left": 590}}/>
        return (
          <Fragment>
            {card2}
            {island2}
          </Fragment>
        )
    }

    displayUserLoginCard() {
        let card3 = <UserLoginCard style={{"top": 6, "left": 840}}/>
        let island3 = <CardFloatingIsland style={{"top": 400, "left": 860}}/>
        return (
          <Fragment>
            {card3}
            {island3}
          </Fragment>
        )
    }


    render() {
        return (
            <div className="container">

                {this.displayCardDeck()}

                {this.displayNewCharacterCard()}

                {this.displayLearnMoreCard()}

                {this.displayUserLoginCard()}

            </div>

        )
    }

}

export default MainMenuContainer