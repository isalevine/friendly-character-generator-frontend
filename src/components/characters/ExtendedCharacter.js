import React, { Component, Fragment} from 'react'

import CharacterPortraitExtended from './CharacterPortraitExtended'


// code copied almost completely from ConvertedCharacter.js
class ExtendedCharacter extends Component {

    parseConvertedCharacter = () => {
        let character = this.props.convertedCharacter

        let credits = 
        <Fragment>
            <strong>CREATED BY FRIENDLY CHARACTER GENERATOR</strong><br />
            <a href="http://localhost:3001/">http://localhost:3001/</a><br />
            App by Isa Levine<br />
            <a href="https://github.com/isalevine/">https://github.com/isalevine/</a><br /><br />
        </Fragment>

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

        let portrait = <Fragment>{character.img_url ? <CharacterPortraitExtended img_url={character.img_url}/> : null }</Fragment>

        return (
            <Fragment>
                {credits}
                {header}
                {stats}
                {skills}
                {powers}
                {unique}
                {backstory}
                <br /><br /><br />
                {portrait}
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


    // code copied from: https://stackoverflow.com/a/12997207
    handlePrint = () => {
        var prtContent = document.getElementById("extended-character-card");
        var WinPrint = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');
        WinPrint.document.write(prtContent.innerHTML);
        WinPrint.document.close();
        WinPrint.focus();
        WinPrint.print();
        WinPrint.close();
    }



    render() {
        return (
            <Fragment>
              <div id="extended-character-card" className="long-card card-character" style={this.props.style}>
                <div className="long-card-character-text">
                    {this.parseConvertedCharacter()}
                    <button className="print-extended-card-button" onClick={this.handlePrint}>Print!</button>
                </div>
              </div>
            </Fragment>
          )
    }
}


export default ExtendedCharacter