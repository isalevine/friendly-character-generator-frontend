import React, { Component, Fragment} from 'react'


class ConvertedCharacter extends Component {

    parseConvertedCharacter = () => {
        let character = this.props.convertedCharacter

        let header = <div className="character-header">
            {character.archetype_name ? `Archetype: ${character.archetype_name}` : null} <br/>
            {character.race ? `Race: ${character.race}` : null} <br/> 
            {character.class ? `Class: ${character.class}` : null} <br/>
        </div>



        return (
            <Fragment>
                {header}


            </Fragment>
        )
    }

    render() {
        return (
            <Fragment>
              <div className="card card-character" style={this.props.style}>
                <div className="card-text">
                  {this.parseConvertedCharacter()}
      
                </div>
              </div>
            </Fragment>
          )
    }
}


export default ConvertedCharacter