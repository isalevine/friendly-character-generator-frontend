import React, {Component, Fragment} from 'react';
import './App.css';

// import OldMainPage from './components/OldMainPage'
import GridContainer from './containers/GridContainer'


// const API_URL = "http://localhost:3000/api/v1/"
// => global variable not working? (specifically in fetch() in FormContainer)


class App extends Component {

  render() {
    return (
      <Fragment>
        <div className="header navbar">Hi
          <p><strong>This is from App.js</strong></p>
        </div>

        <GridContainer />
      </Fragment>
    )
  }

}

export default App;
