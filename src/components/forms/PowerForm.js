import React, {Component, Fragment} from 'react'


class PowerForm extends Component {

  render() {
    return (
      <Fragment>
        <form id="power-form">
          2. I like to have powers that...<br />
          <input type="radio" name="power-form" value="damage" />deal extra damage!<br />
          <input type="radio" name="power-form" value="heal" />heal and protect others!<br />
          <input type="radio" name="power-form" value="stealth" />give me super-stealth!<br />
          <input type="radio" name="power-form" value="intelligence" />give me super-intelligence!<br />
          <input type="radio" name="power-form" value="control" />help me control others!<br />
        </form>
      </Fragment>
    )
  }

}


export default PowerForm
