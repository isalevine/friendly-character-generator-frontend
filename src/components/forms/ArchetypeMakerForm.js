import React, {Component, Fragment} from 'react'



class ArchetypeMakerForm extends Component {

    // NOTE: system-unique-dnd is HARD-CODED and will need to be refactored when Exalted/other systems are rolled out 
    // (same is true for Class and Race -- may need to be refactored in to be their own form, separate from system-unique ??)   
    constructor() {
        super()
        this.state = {
            formData: {
                general: {
                    name: "",
                },
                stats: {
                    stat1: "strength",
                    stat2: "dexterity",
                    stat3: "constitution",
                    stat4: "wisdom",
                    stat5: "intelligence",
                    stat6: "charisma"
                },
                skills: {
                    skill1: "athletics_dodge",
                    skill2: "awareness",
                    skill3: "deception",
                    skill4: "feats_of_strength",
                    skill5: "intimidation",
                    skill6: "investigation"
                },
                powers: {
                    power1: "",
                    power2: "",
                    power3: "",
                    power4: "",
                    power5: "",
                    power6: ""
                },
                snippets: {
                    snippet1: "",
                    snippet2: "",
                    snippet3: "",
                    snippet4: "",
                    snippet5: "",
                    snippet6: ""
                },
                systemUniqueDnd: {
                    dnd_class: "barbarian",
                    dnd_race: "dragonborn",
                    alignment: "lawful/neutral/chaotic + good/neutral/evil",
                    equipment: "",
                    hit_points: "roll d10, add Constitution modifier",
                    armor_class: "armor base AC, add Dexterity modifier",
                    ability_modifiers: "8-9 = -1; 10-11 = 0; 12-13 = +1; 14-15 = +2; 16-17 = +3, 18-19 = +4",
                    dnd_skill1: "acrobatics",
                    dnd_skill2: "animal_handling",
                    dnd_skill3: "arcana"
                }
            },
            stat_options: ["strength", "dexterity", "constitution", "wisdom", "intelligence", "charisma"],
            skill_options: ["athletics_dodge", "awareness", "deception", "feats_of_strength", "intimidation", "investigation", "larceny_crime", "magic_computer", "performance", "persuasion", "socialize", "stealth"],
            
            dnd_class_list: ["barbarian", "bard", "cleric", "druid", "fighter", "monk", "paladin", "ranger", "rogue", "sorcerer", "warlock", "wizard"],
            dnd_race_list: ["dragonborn", "dwarf", "elf", "gnome", "half-elf", "halfling", "half-orc", "human", "tiefling"],
            dnd_skill_list: ["acrobatics", "animal_handling", "arcana", "athletics", "deception", "history", "insight", "intimidation", "investigation", "medicine", "nature", "perception", "performance", "persuasion", "religion", "sleight_of_hand", "stealth", "survival"],
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

    renderDndClassList = () => {
        return this.state.dnd_class_list.map(dnd_class => {
            return <option key={Math.random()} value={dnd_class}>{dnd_class}</option>
        })
    }

    renderDndRaceList = () => {
        return this.state.dnd_race_list.map(dnd_race => {
            return <option key={Math.random()} value={dnd_race}>{dnd_race}</option>
        })
    }

    renderDndSkillList = () => {
        return this.state.dnd_skill_list.map(dnd_skill => {
            return <option key={Math.random()} value={dnd_skill}>{dnd_skill}</option>
        })
    }




    handleChangeGeneral = (ev) => {
        // debugger
        let newFormData = {...this.state.formData}
        newFormData["general"][ev.target.name] = ev.target.value
        this.setState({formData: newFormData})
    }

    handleChangeStats = (ev) => {
        let newFormData = {...this.state.formData}
        newFormData["stats"][ev.target.name] = ev.target.value
        this.setState({formData: newFormData})
    }

    handleChangeSkills = (ev) => {
        let newFormData = {...this.state.formData}
        newFormData["skills"][ev.target.name] = ev.target.value
        this.setState({formData: newFormData})
    }

    handleChangePowers = (ev) => {
        let newFormData = {...this.state.formData}
        newFormData["powers"][ev.target.name] = ev.target.value
        this.setState({formData: newFormData})
    }

    handleChangeSnippets = (ev) => {
        let newFormData = {...this.state.formData}
        newFormData["snippets"][ev.target.name] = ev.target.value
        this.setState({formData: newFormData})
    }

    handleChangeSystemUniqueDnd = (ev) => {
        let newFormData = {...this.state.formData}
        newFormData["systemUniqueDnd"][ev.target.name] = ev.target.value
        this.setState({formData: newFormData})
    }


    render() {
        return (
            <div id="archetype-maker-all-forms">
                This is the form div

                <form id="archetype-maker-form-general" onChange={this.handleChangeGeneral}>
                    <label name="name"><strong>Archetype Name:</strong></label><br />
                    <input type="text" name="name" placeholder="archetype name"/>
                </form><br />


                <form id="archetype-maker-form-stats" onChange={this.handleChangeStats}>
                    <strong>Rank stats by priority.</strong><br />
                    Selections must be unique!<br />
                    <label name="stat1">Stat #1:</label>
                    <select name="stat1" value={this.state.formData.stats.stat1}>
                        {this.renderStatOptions()}
                    </select><br />
                    <label name="stat2">Stat #2:</label>
                    <select name="stat2" value={this.state.formData.stats.stat2}>
                        {this.renderStatOptions()}
                    </select><br />
                    <label name="stat3">Stat #3:</label>
                    <select name="stat3" value={this.state.formData.stats.stat3}>
                        {this.renderStatOptions()}
                    </select><br />
                    <label name="stat4">Stat #4:</label>
                    <select name="stat4" value={this.state.formData.stats.stat4}>
                        {this.renderStatOptions()}
                    </select><br />
                    <label name="stat5">Stat #5:</label>
                    <select name="stat5" value={this.state.formData.stats.stat5}>
                        {this.renderStatOptions()}
                    </select><br />
                    <label name="stat6">Stat #6:</label>
                    <select name="stat6" value={this.state.formData.stats.stat6}>
                        {this.renderStatOptions()}
                    </select><br />
                </form><br />

                
                <form id="archetype-maker-form-skills" onChange={this.handleChangeSkills}>
                    <strong>Rank skills by priority.</strong><br />
                    Select duplicates to prioritize similarly-grouped skills.<br />
                    (ex. magic_computer => Arcana and Religion)<br />
                    <label name="skill1">Skill #1:</label>
                    <select name="skill1" value={this.state.formData.skills.skill1}>
                        {this.renderSkillOptions()}
                    </select><br />
                    <label name="skill2">Skill #2:</label>
                    <select name="skill2" value={this.state.formData.skills.skill2}>
                        {this.renderSkillOptions()}
                    </select><br />
                    <label name="skill3">Skill #3:</label>
                    <select name="skill3" value={this.state.formData.skills.skill3}>
                        {this.renderSkillOptions()}
                    </select><br />
                    <label name="skill4">Skill #4:</label>
                    <select name="skill4" value={this.state.formData.skills.skill4}>
                        {this.renderSkillOptions()}
                    </select><br />
                    <label name="skill5">Skill #5:</label>
                    <select name="skill5" value={this.state.formData.skills.skill5}>
                        {this.renderSkillOptions()}
                    </select><br />
                    <label name="skill6">Skill #6:</label>
                    <select name="skill6" value={this.state.formData.skills.skill6}>
                        {this.renderSkillOptions()}
                    </select><br />
                    (COMING SOON: cyberpunk expansions via magic_computer)<br />
                </form><br />


                <form id="archetype-maker-form-powers" onChange={this.handleChangePowers}>
                    <strong>Enter up to six terms to use when prioritizing powers.</strong><br />
                    (ex. "sword", "extra attacks", "fire", etc.)<br />
                    <label name="power1">Power #1:</label>
                    <input type="text" name="power1" placeholder="search term" value={this.state.formData.powers.power1}/><br />
                    <label name="power2">Power #2:</label>
                    <input type="text" name="power2" placeholder="search term" value={this.state.formData.powers.power2}/><br />
                    <label name="power3">Power #3:</label>
                    <input type="text" name="power3" placeholder="search term" value={this.state.formData.powers.power3}/><br />
                    <label name="power4">Power #4:</label>
                    <input type="text" name="power4" placeholder="search term" value={this.state.formData.powers.power4}/><br />
                    <label name="power5">Power #5:</label>
                    <input type="text" name="power5" placeholder="search term" value={this.state.formData.powers.power5}/><br />
                    <label name="power6">Power #6:</label>
                    <input type="text" name="power6" placeholder="search term" value={this.state.formData.powers.power6}/><br />
                </form><br />


                <form id="archetype-maker-form-snippets" onChange={this.handleChangeSnippets}>
                    <strong>Enter up to six terms to use when generating their backstory.</strong><br />
                    (ex. "mountain", "performing", "fire", etc.)<br />
                    <label name="snippet1">Snippet #1:</label>
                    <input type="text" name="snippet1" placeholder="search term" value={this.state.formData.snippets.snippet1}/><br />
                    <label name="snippet2">Snippet #2:</label>
                    <input type="text" name="snippet2" placeholder="search term" value={this.state.formData.snippets.snippet2}/><br />
                    <label name="snippet3">Snippet #3:</label>
                    <input type="text" name="snippet3" placeholder="search term" value={this.state.formData.snippets.snippet3}/><br />
                    <label name="snippet4">Snippet #4:</label>
                    <input type="text" name="snippet4" placeholder="search term" value={this.state.formData.snippets.snippet4}/><br />
                    <label name="snippet5">Snippet #5:</label>
                    <input type="text" name="snippet5" placeholder="search term" value={this.state.formData.snippets.snippet5}/><br />
                    <label name="snippet6">Snippet #6:</label>
                    <input type="text" name="snippet6" placeholder="search term" value={this.state.formData.snippets.snippet6}/><br />
                </form><br />


                <form id="archetype-maker-form-system-unique-dnd" onChange={this.handleChangeSystemUniqueDnd}>
                    <strong>Enter any custom defaults for DnD's system-unique parameters.</strong><br />
                    <label name="dnd_class">DnD Class:</label>
                    <select name="dnd_class" value={this.state.formData.systemUniqueDnd.dnd_class}>
                        {this.renderDndClassList()}
                    </select><br />
                    <label name="dnd_race">DnD Race:</label>
                    <select name="dnd_race" value={this.state.formData.systemUniqueDnd.dnd_race}>
                        {this.renderDndRaceList()}
                    </select><br />

                    <label name="alignment">Alignment:</label>
                    <input type="text" name="alignment" value={this.state.formData.systemUniqueDnd.alignment}/><br />
                    <label name="equipment">Equipment:</label>
                    <input type="text" name="equipment" value={this.state.formData.systemUniqueDnd.equipment}/><br />
                    <label name="hit_points">Hit Points:</label>
                    <input type="text" name="hit_points" value={this.state.formData.systemUniqueDnd.hit_points}/><br />
                    <label name="armor_class">Armor Class:</label>
                    <input type="text" name="armor_class" value={this.state.formData.systemUniqueDnd.armor_class}/><br />
                    <label name="ability_modifiers">Ability Modifiers:</label>
                    <input type="text" name="ability_modifiers" value={this.state.formData.systemUniqueDnd.ability_modifiers}/><br />

                    <br />
                    <strong>DnD system-specific skill preferences:</strong><br />
                    <label name="dnd_skill1">DnD Skill Preference #1:</label>
                    <select name="dnd_skill1" value={this.state.formData.systemUniqueDnd.dnd_skill1}>
                        {this.renderDndSkillList()}
                    </select><br />
                    <label name="dnd_skill2">DnD Skill Preference #2:</label>
                    <select name="dnd_skill2" value={this.state.formData.systemUniqueDnd.dnd_skill2}>
                        {this.renderDndSkillList()}
                    </select><br />
                    <label name="dnd_skill3">DnD Skill Preference #3:</label>
                    <select name="dnd_skill3" value={this.state.formData.systemUniqueDnd.dnd_skill3}>
                        {this.renderDndSkillList()}
                    </select><br />
                </form>

            </div>
        )
    }

}

export default ArchetypeMakerForm