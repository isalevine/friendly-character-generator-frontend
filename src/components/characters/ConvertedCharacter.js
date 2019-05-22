import React, { Component, Fragment} from 'react'


class ConvertedCharacter extends Component {

    parseConvertedCharacter = () => {
        let character = this.props.convertedCharacter

        let header = <Fragment>
            {character.archetype_name ? `Archetype: ${character.archetype_name}` : null} <br/>
            {character.race ? `${character.race.alias}: ${character.race.race}` : null} <br/> 
            {character.class ? `${character.class.alias}: ${character.class.class}` : null} <br/><br/>
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
        return <Fragment>{alias}<ul className="character-list">{list}</ul></Fragment>
    }

    renderSkillList = (character) => {
        let alias = `${character.skills.alias} list: `
        let skill_array = character.skills.list
        let list = skill_array.map(skill => {
            return <li key={Math.random()} >{`${skill.name}: ${skill.points}`}</li>
        })
        return <Fragment>{alias}<ul className="character-list">{list}</ul></Fragment>
    }

    renderPowerList = (character) => {
        let alias = `${character.powers.alias} list: `
        let power_array = character.powers.list
        let list = power_array.map(power => {
            return <li key={Math.random()} >{`${power.name}: (Roll/Rules: ${power.roll}) ${power.description}`}</li>
        })
        return <Fragment>{alias}<ul className="character-list">{list}</ul></Fragment>
    }

    renderUniqueList = (character) => {}

    renderBackstory = (character) => {
        let backstory_string = "";
        for (let key in character.backstory) {
            backstory_string += ` ${character.backstory[key]}`
        }
        return <Fragment>Backstory:<br/> {backstory_string}</Fragment>
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