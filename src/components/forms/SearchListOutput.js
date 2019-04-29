import React, {Component} from 'react'


class SearchListOutput extends Component {

  render() {
    console.log(this.props.formSearchList)
    return (
      <div id="search-list-output" style={this.props.style}>
        <h4>SearchList Output:</h4>
          <p>stat_preference: {this.props.formSearchList.stat_preference}</p>
          <p>action_preference: {this.props.formSearchList.action_preference}</p>
          <p>power_preference: {this.props.formSearchList.power_preference}</p>

      </div>
    )
  }

}


export default SearchListOutput
