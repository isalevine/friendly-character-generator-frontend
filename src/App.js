import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './App.css';

// import OldMainPage from './components/OldMainPage'
// import GridContainer from './containers/GridContainer'
import MainMenuContainer from './containers/MainMenuContainer'
import NewCharacterFormContainer from './containers/NewCharacterFormContainer'
import ArchetypeMakerContainer from './containers/ArchetypeMakerContainer'
import SpeechBubbleHeader from './components/header/SpeechBubbleHeader'


class App extends Component {

  render() {
    return (
      <Router>
        <Fragment>


          <SpeechBubbleHeader />

          <div id="main-container">
            <Route path="/" exact component={MainMenuContainer} />
            <Route path="/new_character" component={NewCharacterFormContainer} />
            <Route path="/archetype_maker" component={ArchetypeMakerContainer} />
          </div>

          <div id="fond" style={{"marginLeft": "-5%"}}>
            <div id="fume">
              <div id="masque"
              ></div>
            </div>
          </div>



          <div id="fond" style={{"marginLeft": "50%"}}>
            <div id="fume">
              <div id="masque"
              ></div>
            </div>
          </div>

        </Fragment>
      </Router>
    )
  }

}

export default App;


// <div className="header navbar">
//   <p><strong>Welcome to Friendly Character Generator! Need a new DnD 5th Edition character? We got you covered!</strong></p>
//   <strong>To begin creating a new Dungeons and Dragons character, click the deck below.</strong>
// </div>


{/* <div id="fond" style={{"marginLeft": "25%"}}>
<div id="fume">
  <div id="masque"
  ></div>
</div>
</div> */}


          



