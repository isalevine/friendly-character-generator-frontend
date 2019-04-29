import React, {Component} from 'react'


class SearchPreferenceOutput extends Component {

  render() {
    console.log(this.props.formSearchPreference)
    return (
      <div id="search-preference-output" style={this.props.style}>
        <h4>SearchPreference Output:</h4>
          <p>stat_preference: {this.props.formSearchPreference.stat_preference}</p>
          <p>action_preference: {this.props.formSearchPreference.action_preference}</p>
          <p>power_preference: {this.props.formSearchPreference.power_preference}</p>

      </div>
    )
  }

}


export default SearchPreferenceOutput
