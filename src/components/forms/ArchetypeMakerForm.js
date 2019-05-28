import React, {Component, Fragment} from 'react'



class ArchetypeMakerForm extends Component {

    // NOTE: system-unique-dnd is HARD-CODED and will need to be refactored when Exalted/other systems are rolled out    
    constructor() {
        super()
        this.state = {
            formData: {
                general: {

                },
                stats: {

                },
                skills: {

                },
                powers: {

                },
                snippets: {

                },
                systemUniqueDnd: {

                }
            },
            stat_options: ["strength", "dexterity", "constitution", "wisdom", "intelligence", "charisma"],
            skill_options: ["athletics_dodge", "awareness", "deception", "feats_of_strength", "intimidation", "investigation", "larceny_crime", "magic_computer", "performance", "persuasion", "socialize", "stealth"],
        }
    }

    renderStatOptions = () => {
        return this.state.stat_options.map(stat => {
            return <option key={Math.random()} value={stat}>{stat}</option>
        })
    }

    renderSkillOptions = () => {
        return this.state.skill_options.map(skill => {
            return <option key={Math.random()} value={skill}>{skill}</option>
        })
    }

    render() {
        return (
            <div id="archetype-maker-all-forms">
                This is the form div

                <form id="archetype-maker-form-general">
                    <label name="name">Archetype Name:</label>
                    <input type="text" name="name" placeholder="archetype name"/>
                </form><br />


                <form id="archetype-maker-form-stats">
                    Rank stats by priority.<br />
                    Selections must be unique!<br />
                    <label name="stat1">Stat #1:</label>
                    <select name="stat1">
                        {this.renderStatOptions()}
                    </select><br />
                    <label name="stat2">Stat #2:</label>
                    <select name="stat2">
                        {this.renderStatOptions()}
                    </select><br />
                    <label name="stat3">Stat #3:</label>
                    <select name="stat3">
                        {this.renderStatOptions()}
                    </select><br />
                    <label name="stat4">Stat #4:</label>
                    <select name="stat4">
                        {this.renderStatOptions()}
                    </select><br />
                    <label name="stat5">Stat #5:</label>
                    <select name="stat5">
                        {this.renderStatOptions()}
                    </select><br />
                    <label name="stat6">Stat #6:</label>
                    <select name="stat6">
                        {this.renderStatOptions()}
                    </select><br />
                </form><br />

                
                <form id="archetype-maker-form-skills">
                    Rank skills by priority.<br />
                    Select duplicates to prioritize similarly-grouped skills.<br />
                    (ex. magic_computer => Arcana and Religion)<br />
                    <label name="skill1">Skill #1:</label>
                    <select name="skill1">
                        {this.renderSkillOptions()}
                    </select><br />
                    <label name="skill2">Skill #2:</label>
                    <select name="skill2">
                        {this.renderSkillOptions()}
                    </select><br />
                    <label name="skill3">Skill #3:</label>
                    <select name="skill3">
                        {this.renderSkillOptions()}
                    </select><br />
                    <label name="skill4">Skill #4:</label>
                    <select name="skill4">
                        {this.renderSkillOptions()}
                    </select><br />
                    <label name="skill5">Skill #5:</label>
                    <select name="skill5">
                        {this.renderSkillOptions()}
                    </select><br />
                    <label name="skill6">Skill #6:</label>
                    <select name="skill6">
                        {this.renderSkillOptions()}
                    </select><br />
                    (COMING SOON: cyberpunk expansions via magic_computer)<br />
                </form><br />


                <form id="archetype-maker-form-powers">
                
                </form>


                <form id="archetype-maker-form-snippets">
                
                </form>


                <form id="archetype-maker-form-system-unique-dnd">
                
                </form>

            </div>
        )
    }

}

export default ArchetypeMakerForm