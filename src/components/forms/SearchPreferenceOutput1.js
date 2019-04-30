import React, {Component} from 'react'


// possible text to reuse/implement this component:
// "Hmm, I'm thinking a character with..."
// "...a playstyle that's [physical]..."
// "...actions associated with '[tank]'..."
// "...stats that prioritize [stamina]..."
// "...and powers related to '[heal]'."

class SearchPreferenceOutput extends Component {

  render() {
    console.log(this.props.formSearchPreference)
    return (
      <div id="search-preference-output" style={this.props.style}>
        <h4>SearchPreference Output:</h4>
          playstyle_preference: {this.props.formSearchPreference.playstyle_preference}<br />
          action_preference: {this.props.formSearchPreference.action_preference}<br />
          stat_preference: {this.props.formSearchPreference.stat_preference}<br />
          power_preference: {this.props.formSearchPreference.power_preference}

      </div>
    )
  }

}


export default SearchPreferenceOutput
