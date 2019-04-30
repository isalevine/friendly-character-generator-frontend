import React, {Component} from 'react'


class FoundArchetypeOutput extends Component {

  render() {
    console.log(this.props.foundArchetype)
    return (
      <div id="found-archetype-output" className="form-search-outputs" style={this.props.style}>
        <h4>Found Archetype Output:</h4>
          archetype name: {this.props.foundArchetype.name}<br />
          archetype id: {this.props.foundArchetype.id}

      </div>
    )
  }

}


export default FoundArchetypeOutput
