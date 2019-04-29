import React, {Component, Fragment} from 'react';
import './App.css';

// import OldMainPage from './components/OldMainPage'
import GridContainer from './containers/GridContainer'


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
