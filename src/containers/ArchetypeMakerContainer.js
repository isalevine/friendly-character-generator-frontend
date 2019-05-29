import React, {Component, Fragment} from 'react';

import ArchetypeMakerForm from '../components/forms/ArchetypeMakerForm'
import CardDeck from '../components/cards/CardDeck'
import GoBackMessage from '../components/cards/GoBackMessage'
import DeckFloatingIsland from '../components/art/DeckFloatingIsland'


class ArchetypeMakerContainer extends Component {

    displayCardDeck() {
        return (
          <div className="deck-of-cards">
            <CardDeck style={{"top": "200px", "left": "10px", "zIndex": 2}} />
            <CardDeck style={{"top": "206px", "left": "15px", "zIndex": 3}} />
            <CardDeck style={{"top": "212px", "left": "20px", "zIndex": 5}} />
            <CardDeck style={{"top": "218px", "left": "25px", "zIndex": 6}} />
              <GoBackMessage
                style={{"position": "absolute", "top": "200px", "left": "10px", "zIndex": 6}}
                history={this.props.history}
              />
    
              <DeckFloatingIsland style={{"top": 580, "left": -27}} />
          </div>
        )
      }

    render() {
        return (
            <Fragment>
                {this.displayCardDeck()}
                <div id="archetype-maker-container">
                    <ArchetypeMakerForm />
                </div>
            </Fragment>

        )
    }

}

export default ArchetypeMakerContainer