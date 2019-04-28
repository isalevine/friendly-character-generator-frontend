import React, {Component, Fragment} from 'react'


class FilterForm extends Component {

  render() {
    return (
      <Fragment>
        <form id="filter-form">
          3. I want to filter out... (select all that apply)<br />
          <input type="checkbox" name="filter-form" value="magic" />magic!<br />
          <input type="checkbox" name="filter-form" value="guns" />guns!<br />
          <input type="checkbox" name="filter-form" value="computers" />computers!<br />
          <input type="checkbox" name="filter-form" value="non-humans" />non-humans!<br />
          <input type="checkbox" name="filter-form" value="evil" />evil alignments!<br />
          <input type="checkbox" name="filter-form" value="seduction" />seduciotn! / sex!<br />
        </form>
      </Fragment>
    )
  }

}


export default FilterForm
