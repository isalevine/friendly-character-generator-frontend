import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './App.css';

// import OldMainPage from './components/OldMainPage'
// import GridContainer from './containers/GridContainer'
import FormContainer from './containers/FormContainer'
import ArchetypeMakerContainer from './containers/ArchetypeMakerContainer'


// const API_URL = "http://localhost:3000/api/v1/"
// => global variable not working? (specifically in fetch() in FormContainer)


class App extends Component {

  render() {
    return (
      <Router>
        <Fragment>
          <div className="header navbar">
            <p><strong>Welcome to Friendly Character Generator! Need a new DnD 5th Edition character? We got you covered!</strong></p>
            <strong>To begin creating a new Dungeons and Dragons character, click the deck below.</strong>
          </div>

          <div id="main-container">
            <Route path="/" exact component={FormContainer} />
            <Route path="/archetype_maker" component={ArchetypeMakerContainer} />
          </div>
        </Fragment>
      </Router>
    )
  }

}

export default App;
