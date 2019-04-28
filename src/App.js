import React, {Component, Fragment} from 'react';
import './App.css';

import OldMainPage from './components/OldMainPage'
import FormContainer from './containers/FormContainer'


class App extends Component {

  render() {
    return (
      <Fragment>
        <div>Hi</div>
        <p><strong>This is from App.js</strong></p>

        <br /><br /><br />

        <OldMainPage />

        <FormContainer />
      </Fragment>
    )
  }

}

export default App;
