import React, {Component, Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import OldMainPage from './components/OldMainPage'

class App extends Component {

  render() {
    return (
      <Fragment>
        <div>Hi</div>
        <p><strong>This is from App.js</strong></p>

        <br /><br /><br />

        <OldMainPage />
      </Fragment>
    )
  }

}

export default App;
