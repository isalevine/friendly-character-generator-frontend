import React, {Component} from 'react'


// possible text to reuse/implement this component:
// "Hmm, I'm thinking a character with..."
// "...a playstyle that's [physical]..."
// "...actions associated with '[tank]'..."
// "...stats that prioritize [stamina]..."
// "...and powers related to '[heal]'."

class SearchPreferenceOutput extends Component {

  render() {
    return (
      <div id="search-preference-output" className="form-search-outputs" style={this.props.style}>
        <h4>SearchPreference Output:</h4>
          <strong>playstyle_preference:</strong> {this.props.formSearchPreference.playstyle_preference}<br />
          <strong>action_preference:</strong> {this.props.formSearchPreference.action_preference}<br />
          <strong>stat_preference:</strong> {this.props.formSearchPreference.stat_preference}<br />
          <strong>power_preference:</strong> {this.props.formSearchPreference.power_preference}

      </div>
    )
  }

}


export default SearchPreferenceOutput
