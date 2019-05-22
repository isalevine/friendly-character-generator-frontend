import React, { Component, Fragment} from 'react'


// code copied almost completely from ConvertedCharacter.js
class ExtendedCharacter extends Component {

    parseConvertedCharacter = () => {
        let character = this.props.convertedCharacter

        let header = <Fragment>
            <strong>Archetype: </strong> {character.archetype_name ? `${character.archetype_name}` : null} <br/>
            <strong>{character.race.alias}: </strong> {character.race ? `${character.race.race}` : null} <br/> 
            <strong>{character.class.alias}: </strong> {character.class ? `${character.class.class}` : null} <br/><br/>
        </Fragment>

        let stats = <Fragment>{character.stats ? this.renderStatList(character) : null}</Fragment>

        let skills = <Fragment>{character.skills ? this.renderSkillList(character) : null}</Fragment>

        let powers = <Fragment>{character.skills ? this.renderPowerList(character) : null}</Fragment>

        let unique;

        let backstory = <Fragment>{this.renderBackstory(character)}</Fragment>


        return (
            <Fragment>
                {header}
                {stats}
                {skills}
                {powers}
                {unique}
                {backstory}
            </Fragment>
        )
    }

    renderStatList = (character) => {
        let alias = `${character.stats.alias} list: `
        let stat_array = Object.keys(character.stats.list) 
        let list = stat_array.map(stat => {
            return <li key={Math.random()} >{`${stat}: ${character.stats.list[stat]}`}</li>
        })
        return <Fragment><strong>{alias}</strong><ul className="character-list">{list}</ul></Fragment>
    }

    renderSkillList = (character) => {
        let alias = `${character.skills.alias} list: `
        let skill_array = character.skills.list
        let list = skill_array.map(skill => {
            return <li key={Math.random()} >{`${skill.name}: ${skill.points}`}</li>
        })
        return <Fragment><strong>{alias}</strong><ul className="character-list">{list}</ul></Fragment>
    }

    renderPowerList = (character) => {
        let alias = `${character.powers.alias} list: `
        let power_array = character.powers.list
        let list = power_array.map(power => {
            return <li key={Math.random()} > <strong>{power.name}:</strong> <br/> <em>(Roll/Rules: {power.roll})</em> <br/> {power.description}</li>
        })
        return <Fragment><strong>{alias}</strong><ul className="character-list">{list}</ul></Fragment>
    }

    renderUniqueList = (character) => {}

    renderBackstory = (character) => {
        let backstory_string = "";
        for (let key in character.backstory) {
            backstory_string += ` ${character.backstory[key]}`
        }
        return <Fragment><strong>Backstory:</strong><br/> {backstory_string}</Fragment>
    }



    render() {
        return (
            <Fragment>
              <div className="long-card card-character" style={this.props.style}>
                <div className="long-card-character-text">
                  {this.parseConvertedCharacter()}
      
                </div>
              </div>
            </Fragment>
          )
    }
}


export default ExtendedCharacter