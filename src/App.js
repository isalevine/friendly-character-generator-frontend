import React, {Component, Fragment} from 'react';
import './App.css';

// import OldMainPage from './components/OldMainPage'
import GridContainer from './containers/GridContainer'


class App extends Component {

  render() {
    return (
      <Fragment>
        <div>Hi</div>
        <p><strong>This is from App.js</strong></p>

        <br /><br /><br />


        <GridContainer />
      </Fragment>
    )
  }

}

export default App;
