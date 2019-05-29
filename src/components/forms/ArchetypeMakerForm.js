import React, {Component, Fragment} from 'react'

import {API_URL, CONVERTER_URL, HEADERS} from '../../constants/index'



class ArchetypeMakerForm extends Component {

    // NOTE: system-unique-dnd is HARD-CODED and will need to be refactored when Exalted/other systems are rolled out 
    // (same is true for Class and Race -- may need to be refactored in to be their own form, separate from system-unique ??)   
    constructor() {
        super()
        this.state = {
            formData: {
                general: {
                    name: "",
                    img_url: ""
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
                },
                searchList: {
                    playstyle: {
                        physical: false,
                        mental: false,
                        social: false,
                    },
                    action: {
                        weapon: false,
                        tank: false,
                        sneak: false,
                        spells: false,
                        investigate: false,
                        knowledge: false,
                        leader: false,
                        perform: false,
                        manipulate: false,
                        seduce: false,
                    },
                    stat: {},
                    power: {
                        damage: false,
                        heal: false,
                        stealth: false,
                        mind: false,
                        control: false,
                        any: false,
                    },
                }
            },
            playstyle_pref_options: ["physical", "mental", "social"],
            action_pref_options: ["weapon", "tank", "sneak", "spells", "investigate", "knowledge", "leader", "perform", "manipulate", "seduce"],
            stat_pref_options: ["strength", "dexterity", "constitution", "wisdom", "intelligence", "charisma"],
            power_pref_options: ["damage", "heal", "stealth", "mind", "control", "any"],
            

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

    renderPlaystylePref = () => {
        return this.state.playstyle_pref_options.map(playstyle => {
            return (
                <Fragment key={Math.random()}>
                    <input type="checkbox" name="playstyle" value={playstyle} checked={this.state.formData.searchList.playstyle[playstyle]} onChange={this.handleChangeSearchListPlaystyle}/>  
                    <label name="playstyle">{playstyle}</label>
                    <br />
                </Fragment>
            )
        })
    }

    renderActionPref = () => {
        return this.state.action_pref_options.map(action => {
            return (
                <Fragment key={Math.random()}>
                    <input type="checkbox" name="action" value={action} checked={this.state.formData.searchList.action[action]} onChange={this.handleChangeSearchListAction}/>  
                    <label name="action">{action}</label>
                    <br />
                </Fragment>
            )
        })
    }

    // renderStatPref = () => {
    //     currently disabled from SearchList matching 
    // }

    renderPowerPref = () => {
        return this.state.power_pref_options.map(power => {
            return (
                <Fragment key={Math.random()}>
                    <input type="checkbox" name="power" value={power} checked={this.state.formData.searchList.power[power]} onChange={this.handleChangeSearchListPower}/>  
                    <label name="power">{power}</label>
                    <br />
                </Fragment>
            )
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



    handleChangeSearchListPlaystyle = (ev) => {
        let newFormData = {...this.state.formData}
        newFormData["searchList"][ev.target.name][ev.target.value] = !newFormData["searchList"][ev.target.name][ev.target.value]
        this.setState({formData: newFormData})
    }

    handleChangeSearchListAction = (ev) => {
        let newFormData = {...this.state.formData}
        newFormData["searchList"][ev.target.name][ev.target.value] = !newFormData["searchList"][ev.target.name][ev.target.value]
        this.setState({formData: newFormData})
    }

    handleChangeSearchListPower = (ev) => {
        let newFormData = {...this.state.formData}
        newFormData["searchList"][ev.target.name][ev.target.value] = !newFormData["searchList"][ev.target.name][ev.target.value]
        this.setState({formData: newFormData})
    }



    formPreventDefault = (ev) => {
        ev.preventDefault();
    }

    handleSubmit = (ev) => {
        this.fetchPostNewArchetype()
    }

    


    fetchPostNewArchetype = () => {
        let url = API_URL + "/new_archetype"
        let config = {
            method: "POST",
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("token"),
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(this.state.formData)
        }
        fetch(url, config)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            // debugger
        })
    }



    // MUST ADD IN PREFERENCES FOR INITIAL ARCHETYPE SEARCH!!
    // t.integer "archetype_id"
    // t.string "search_playstyle_pref"
    // t.string "search_action_pref"
    // t.string "search_stat_pref"
    // t.string "search_power_pref"
    render() {
        return (
            <div id="archetype-maker-all-forms">
                <strong>NEW ARCHETYPE</strong><br /><br />

                <form id="archetype-maker-form-general"  onSubmit={this.formPreventDefault}>
                    <label name="name"><strong>Archetype Name:</strong></label><br />
                    <input type="text" name="name" placeholder="archetype name" onChange={this.handleChangeGeneral}/><br />
                    <br />
                    <label name="img_url"><strong>Image URL:</strong></label><br />
                    <input type="text" name="img_url" placeholder="image URL" onChange={this.handleChangeGeneral}/>
                </form><br />


                <form id="archetype-maker-form-stats" onSubmit={this.formPreventDefault}>
                    <strong>Rank stats by priority.</strong><br />
                    Selections must be unique!<br />
                    <label name="stat1">Stat #1:</label>
                    <select name="stat1" value={this.state.formData.stats.stat1} onChange={this.handleChangeStats}>
                        {this.renderStatOptions()}
                    </select><br />
                    <label name="stat2">Stat #2:</label>
                    <select name="stat2" value={this.state.formData.stats.stat2} onChange={this.handleChangeStats}>
                        {this.renderStatOptions()}
                    </select><br />
                    <label name="stat3">Stat #3:</label>
                    <select name="stat3" value={this.state.formData.stats.stat3} onChange={this.handleChangeStats}>
                        {this.renderStatOptions()}
                    </select><br />
                    <label name="stat4">Stat #4:</label>
                    <select name="stat4" value={this.state.formData.stats.stat4} onChange={this.handleChangeStats}>
                        {this.renderStatOptions()}
                    </select><br />
                    <label name="stat5">Stat #5:</label>
                    <select name="stat5" value={this.state.formData.stats.stat5} onChange={this.handleChangeStats}>
                        {this.renderStatOptions()}
                    </select><br />
                    <label name="stat6">Stat #6:</label>
                    <select name="stat6" value={this.state.formData.stats.stat6} onChange={this.handleChangeStats}>
                        {this.renderStatOptions()}
                    </select><br />
                </form><br />

                
                <form id="archetype-maker-form-skills" onSubmit={this.formPreventDefault}>
                    <strong>Rank skills by priority.</strong><br />
                    Select duplicates to prioritize similarly-grouped skills.<br />
                    <em>(ex. magic_computer => Arcana and Religion)</em><br />
                    <label name="skill1">Skill #1:</label>
                    <select name="skill1" value={this.state.formData.skills.skill1} onChange={this.handleChangeSkills}>
                        {this.renderSkillOptions()}
                    </select><br />
                    <label name="skill2">Skill #2:</label>
                    <select name="skill2" value={this.state.formData.skills.skill2} onChange={this.handleChangeSkills}>
                        {this.renderSkillOptions()}
                    </select><br />
                    <label name="skill3">Skill #3:</label>
                    <select name="skill3" value={this.state.formData.skills.skill3} onChange={this.handleChangeSkills}>
                        {this.renderSkillOptions()}
                    </select><br />
                    <label name="skill4">Skill #4:</label>
                    <select name="skill4" value={this.state.formData.skills.skill4} onChange={this.handleChangeSkills}>
                        {this.renderSkillOptions()}
                    </select><br />
                    <label name="skill5">Skill #5:</label>
                    <select name="skill5" value={this.state.formData.skills.skill5} onChange={this.handleChangeSkills}>
                        {this.renderSkillOptions()}
                    </select><br />
                    <label name="skill6">Skill #6:</label>
                    <select name="skill6" value={this.state.formData.skills.skill6} onChange={this.handleChangeSkills}>
                        {this.renderSkillOptions()}
                    </select><br />
                    <em>(COMING SOON: cyberpunk expansions via magic_computer)</em><br />
                </form><br />


                <form id="archetype-maker-form-powers" onSubmit={this.formPreventDefault}>
                    <strong>Enter up to six terms to use when prioritizing powers.</strong><br />
                    <em>(ex. "sword", "extra attacks", "fire", etc.)</em><br />
                    <label name="power1">Power #1:</label>
                    <input type="text" name="power1" placeholder="search term" value={this.state.formData.powers.power1} onChange={this.handleChangePowers}/><br />
                    <label name="power2">Power #2:</label>
                    <input type="text" name="power2" placeholder="search term" value={this.state.formData.powers.power2} onChange={this.handleChangePowers}/><br />
                    <label name="power3">Power #3:</label>
                    <input type="text" name="power3" placeholder="search term" value={this.state.formData.powers.power3} onChange={this.handleChangePowers}/><br />
                    <label name="power4">Power #4:</label>
                    <input type="text" name="power4" placeholder="search term" value={this.state.formData.powers.power4} onChange={this.handleChangePowers}/><br />
                    <label name="power5">Power #5:</label>
                    <input type="text" name="power5" placeholder="search term" value={this.state.formData.powers.power5} onChange={this.handleChangePowers}/><br />
                    <label name="power6">Power #6:</label>
                    <input type="text" name="power6" placeholder="search term" value={this.state.formData.powers.power6} onChange={this.handleChangePowers}/><br />
                </form><br />


                <form id="archetype-maker-form-snippets" onSubmit={this.formPreventDefault}>
                    <strong>Enter up to six terms to use when generating their backstory.</strong><br />
                    <em>(ex. "mountain", "performing", "fire", etc.)</em><br />
                    <label name="snippet1">Snippet #1:</label>
                    <input type="text" name="snippet1" placeholder="search term" value={this.state.formData.snippets.snippet1} onChange={this.handleChangeSnippets}/><br />
                    <label name="snippet2">Snippet #2:</label>
                    <input type="text" name="snippet2" placeholder="search term" value={this.state.formData.snippets.snippet2} onChange={this.handleChangeSnippets}/><br />
                    <label name="snippet3">Snippet #3:</label>
                    <input type="text" name="snippet3" placeholder="search term" value={this.state.formData.snippets.snippet3} onChange={this.handleChangeSnippets}/><br />
                    <label name="snippet4">Snippet #4:</label>
                    <input type="text" name="snippet4" placeholder="search term" value={this.state.formData.snippets.snippet4} onChange={this.handleChangeSnippets}/><br />
                    <label name="snippet5">Snippet #5:</label>
                    <input type="text" name="snippet5" placeholder="search term" value={this.state.formData.snippets.snippet5} onChange={this.handleChangeSnippets}/><br />
                    <label name="snippet6">Snippet #6:</label>
                    <input type="text" name="snippet6" placeholder="search term" value={this.state.formData.snippets.snippet6} onChange={this.handleChangeSnippets}/><br />
                </form><br />


                <form id="archetype-maker-form-system-unique-dnd" onSubmit={this.formPreventDefault}>
                    <strong>Enter any custom defaults for DnD's system-unique parameters.</strong><br />
                    <label name="dnd_class">DnD Class:</label>
                    <select name="dnd_class" value={this.state.formData.systemUniqueDnd.dnd_class} onChange={this.handleChangeSystemUniqueDnd}>
                        {this.renderDndClassList()}
                    </select><br />
                    <label name="dnd_race">DnD Race:</label>
                    <select name="dnd_race" value={this.state.formData.systemUniqueDnd.dnd_race} onChange={this.handleChangeSystemUniqueDnd}>
                        {this.renderDndRaceList()}
                    </select><br />

                    <label name="alignment">Alignment:</label>
                    <input type="text" name="alignment" value={this.state.formData.systemUniqueDnd.alignment} onChange={this.handleChangeSystemUniqueDnd}/><br />
                    <label name="equipment">Equipment:</label>
                    <input type="text" name="equipment" value={this.state.formData.systemUniqueDnd.equipment} onChange={this.handleChangeSystemUniqueDnd}/><br />
                    <label name="hit_points">Hit Points:</label>
                    <input type="text" name="hit_points" value={this.state.formData.systemUniqueDnd.hit_points} onChange={this.handleChangeSystemUniqueDnd}/><br />
                    <label name="armor_class">Armor Class:</label>
                    <input type="text" name="armor_class" value={this.state.formData.systemUniqueDnd.armor_class} onChange={this.handleChangeSystemUniqueDnd}/><br />
                    <label name="ability_modifiers">Ability Modifiers:</label>
                    <input type="text" name="ability_modifiers" value={this.state.formData.systemUniqueDnd.ability_modifiers} onChange={this.handleChangeSystemUniqueDnd}/><br />

                    <br />
                    <strong>DnD system-specific skill preferences:</strong><br />
                    <label name="dnd_skill1">Preference #1:</label>
                    <select name="dnd_skill1" value={this.state.formData.systemUniqueDnd.dnd_skill1} onChange={this.handleChangeSystemUniqueDnd}>
                        {this.renderDndSkillList()}
                    </select><br />
                    <label name="dnd_skill2">Preference #2:</label>
                    <select name="dnd_skill2" value={this.state.formData.systemUniqueDnd.dnd_skill2} onChange={this.handleChangeSystemUniqueDnd}>
                        {this.renderDndSkillList()}
                    </select><br />
                    <label name="dnd_skill3">Preference #3:</label>
                    <select name="dnd_skill3" value={this.state.formData.systemUniqueDnd.dnd_skill3} onChange={this.handleChangeSystemUniqueDnd}>
                        {this.renderDndSkillList()}
                    </select><br />
                </form><br />

                

                <strong>Select search terms for this Archetype.</strong><br />
                   
                <form id="archetype-maker-form-search-list-playstyle" onSubmit={this.formPreventDefault}>   
                    <strong>Playstyle:</strong><br />
                    {this.renderPlaystylePref()}<br />
                </form>
                <form id="archetype-maker-form-search-list-action" onSubmit={this.formPreventDefault}>   
                    <strong>Action:</strong><br />
                    {this.renderActionPref()}<br />
                </form>
                <form id="archetype-maker-form-search-list-power" onSubmit={this.formPreventDefault}>   
                    <strong>Power:</strong><br />
                    {this.renderPowerPref()}<br />
                </form>
                    


                <button id="archetype-card-button" onClick={this.handleSubmit}>Create Archetype!</button>

            </div>
        )
    }

}

export default ArchetypeMakerForm