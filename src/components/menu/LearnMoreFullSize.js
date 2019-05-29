import React, {Component, Fragment} from 'react'

import LearnLessButton from './LearnLessButton'


class LearnMoreFullSize extends Component {

  render() {
      return (
          <Fragment>
          <div className="learn-more-long-card" style={this.props.style}>
            <div className="card-text">
                <strong>Welcome to Friendly Character Generator!</strong><br /><br />

                Do you wanna play a tabletop RPG like Dungeons & Dragons with your friends, but something is holding you back?
                Maybe it's the complex rules, or the time commitment, or a bad previous experience playing it. We've all been there!<br /><br />

                Friendly Character Generator is designed to help players get into the game right away with no prior knowledge or experience needed.
                Click the "Create New Character!" button on the card to left to begin!<br /><br />

                When creating a new character, the deck of cards will generate simple, easy, and straightforward questions to help you.
                Click on the deck to draw cards and answer the questions. Once all the questions are answered, click the "Create Character!" button
                and a brand-new character with a unique backstory will be generated based on your answers!<br /><br />

                You can also click the "Show more!" button to see an expanded version of your character, including all stats, skills, powers, and
                their full backstory.<br /><br />

                <br /><br />

                <strong>COMING SOON:</strong><br /><br />
                You will be able to log in to create and contribute your own backstory snippets to the character generator!



                

            </div>

            <LearnLessButton toggleDisplayFullSize={this.props.toggleDisplayFullSize} />
          </div>
        </Fragment>
      )
  }

}


export default LearnMoreFullSize