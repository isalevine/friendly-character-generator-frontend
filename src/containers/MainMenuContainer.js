import React, {Component, Fragment} from 'react'

import CardDeck from '../components/cards/CardDeck'
import NewCharacterCard from '../components/menu/NewCharacterCard'
import LearnMoreCard from '../components/menu/LearnMoreCard'
import UserLoginCard from '../components/menu/UserLoginCard'


// lots of functions are copied from FormContainer,
// consider refactoring to pass as props instead?

class MainMenuContainer extends Component {


    displayCardDeck = () => {
        return (
            <div className="deck-of-cards">
                <CardDeck style={{"top": "0px", "left": "0px", "zIndex": 1}} />
                <CardDeck style={{"top": "6px", "left": "5px", "zIndex": 2}} />
                <CardDeck style={{"top": "12px", "left": "10px", "zIndex": 4}} />
                <CardDeck style={{"top": "18px", "left": "15px", "zIndex": 5}} />
            </div>
        )
    }

    displayNewCharacterCard() {
        let card1 = <NewCharacterCard style={{"top": 6, "left": 300}}/>
        return (
          <Fragment>
            {card1}
          </Fragment>
        )
    }

    displayLearnMoreCard() {
        let card2 = <LearnMoreCard style={{"top": 6, "left": 570}}/>
        return (
          <Fragment>
            {card2}
          </Fragment>
        )
    }

    displayUserLoginCard() {
        let card3 = <UserLoginCard style={{"top": 6, "left": 840}}/>
        return (
          <Fragment>
            {card3}
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