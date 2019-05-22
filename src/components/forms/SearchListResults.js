import React, {Component} from 'react'


class SearchListResults extends Component {

  render() {
    // console.log(this.props.SearchList)
    return (
      <div id="search-list-results" className="form-search-outputs" style={this.props.style}>
        <h4>SearchList Results:</h4>
          <strong>search_playstyle_pref:</strong> {this.props.SearchList.search_playstyle_pref}<br />
          <strong>search_action_pref:</strong> {this.props.SearchList.search_action_pref}<br />
          <strong>search_stat_pref:</strong> [currently disabled] <br />
          <strong>search_power_pref:</strong> {this.props.SearchList.search_power_pref}
      </div>
    )
  }

}


export default SearchListResults
