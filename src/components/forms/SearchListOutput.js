import React, {Component} from 'react'


class SearchListOutput extends Component {

  render() {
    return (
      <div id="search-list-output" style={this.props.style}>
        <h4>SearchList Output:</h4>
          <p>stat_preference:</p>
          <p>action_preference:</p>
          <p>power_preference:</p>

      </div>
    )
  }

}


export default SearchListOutput
