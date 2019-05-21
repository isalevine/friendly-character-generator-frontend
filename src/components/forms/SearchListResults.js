import React, {Component} from 'react'


class SearchListResults extends Component {

  render() {
    // console.log(this.props.SearchList)
    return (
      <div id="search-list-results" className="form-search-outputs" style={this.props.style}>
        <h4>SearchList Results:</h4>
          search_playstyle_pref: {this.props.SearchList.search_playstyle_pref}<br />
          search_action_pref: {this.props.SearchList.search_action_pref}<br />
          search_stat_pref: [currently disabled]
          search_power_pref: {this.props.SearchList.search_power_pref}
      </div>
    )
  }

}


export default SearchListResults
