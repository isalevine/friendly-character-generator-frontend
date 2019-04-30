import React, {Component} from 'react'


class FoundArchetypeOutput extends Component {

  render() {
    console.log(this.props.formSearchPreference)
    return (
      <div id="found-archetype-output" className="form-search-outputs" style={this.props.style}>
        <h4>Found Archetype Output:</h4>
          playstyle_preference: {this.props.formSearchPreference.playstyle_preference}<br />
          action_preference: {this.props.formSearchPreference.action_preference}<br />
          stat_preference: {this.props.formSearchPreference.stat_preference}<br />
          power_preference: {this.props.formSearchPreference.power_preference}

      </div>
    )
  }

}


export default FoundArchetypeOutput
