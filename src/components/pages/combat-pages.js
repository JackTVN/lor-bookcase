import React from 'react';
import { useState, useEffect } from 'react';

import SearchBar from '../single/SearchBar.js';
import SelectBar from '../single/SelectBar.js';

import { LoadPages } from '../single/Page.js';

import './stylesheets/combat-pages.scss';
import {cardList, pageImage} from '../../resources/info-source.js';
import {levelImage, Icons} from '../../resources/image-icons.js';

//import objetDartCardBase from '../../resources/combat-pages/rarity/objet-dart/other/objet-dart-base.svg';
//import objetDartCardRange from '../../resources/combat-pages/rarity/objet-dart/type/melee.svg';
//import pageBg from '../../resources/combat-pages/BG.svg';

class CombatPages extends React.Component {
	constructor(props) {
    	super(props);
    	this.state = {
    		search: '',
			typing: false,
    		typingTimeout: 0,
    		level: 'All',
    		pages: cardList.slice().sort(this.Compare),
			factionOption: ["All", "Library", "Rats", "Yun's Office", "Brotherhood of Iron", "Hook Office", 
			"Pierre's Bistro", "Streetlight Office",
			"Zwei Association South Section 6", "Stray Dogs", "Molar Office", 
			"The Carnival", "Full-Stop Office", "Dawn Office", "Gaze Office", "Kurokumo Clan", "The Musicians of Bremen", "Wedge Office", "Love Town", 
			"Rusted Chains", "Workshop-affiliated Fixers",
			"Sweepers", "Shi Association South Section 2", "The 8 o'Clock Circus", "Puppets", "Index Proselytes", "Smiling Faces", "The Crying Children", "WARP Cleanup Crew",
			"Seven Association", "Blade Lineage",
			"The Thumb", "The Reverberation", "Liu Association South Section 2", "Cane Office",
			"The Index", "The Red Mist", "Liu Association South Section 1", "R Corp",
			"얀샋ㄷ요무", "The Purple Tear", "Xiao", "Dong-hwan the Grade 1 Fixer", "Binah",
			"Hana Association", "The Black Silence", "The Reverberation Ensemble", "Keter Realization", "The Reverberation Ensemble Distorted"],
			faction: 'All',
			loadLimit: 24,
    	};

    	this.handleChange = this.handleChange.bind(this);
		this.handleScroll = this.handleScroll.bind(this);
		this.compare = this.compare.bind(this);
		this.reload = this.reload.bind(this);
  	}

  	compare = (a,b) => {
  		let va, vb;

  		switch(a.Level){ case "Canard": va = 0; break; case "Urban Myth": va = 1; break; case "Urban Legend": va = 2; break;
  		case "Urban Plague": va = 3; break; case "Urban Nightmare": va = 4; break; case "Star of the City": va = 5; break; case "Impuritas Civitatis": va = 6; break;
  		}
  		switch(b.Level){ case "Canard": vb = 0; break; case "Urban Myth": vb = 1; break; case "Urban Legend": vb = 2; break;
  		case "Urban Plague": vb = 3; break; case "Urban Nightmare": vb = 4; break; case "Star of the City": vb = 5; break; case "Impuritas Civitatis": vb = 6; break;
  		}

  		if (va < vb){ return -1; } 
  		if (va > vb){ return 1; }

  		switch(a.Rarity){ case "Paperback": va = 0; break; case "Hardcover": va = 1; break;
  		case "Limited": va = 2; break; case "Objet D'art": va = 3;
  		}
  		switch(b.Rarity){ case "Paperback": vb = 0; break; case "Hardcover": vb = 1; break;
  		case "Limited": vb = 2; break; case "Objet D'art": vb = 3;
  		}

  		if (va < vb){ return -1; } 
  		if (va > vb){ return 1; }
		  
  		if (a.Cost < b.Cost){ return -1; } 
  		if (a.Cost > b.Cost){ return 1; }

  		return 0;
  	}

  	reload() {

		// Getting faction/source restriction

		let facCanard = [ "Library", "Rats", "Yun's Office", "Brotherhood of Iron", "Hook Office"];
		let facMyth = ["Library", "Pierre's Bistro", "Streetlight Office"];
		let facLegend = ["Zwei Association South Section 6", "Stray Dogs", "Molar Office"];
		let facPlague = ["The Carnival", "Full-Stop Office", "Dawn Office", "Gaze Office", "Kurokumo Clan", "The Musicians of Bremen", "Wedge Office", "Love Town", 
						"Rusted Chains", "Workshop-affiliated Fixers"];
		let facNightmare = ["Sweepers", "Shi Association South Section 2", "The 8 o'Clock Circus", "Puppets", "Index Proselytes", "Smiling Faces", "The Crying Children", 
							"WARP Cleanup Crew", "Seven Association", "Blade Lineage"];
		let facStar = ["The Thumb", "Argalia & The Churches of Gear", "Liu Association South Section 2", "Cane Office", "The Index", "The Red Mist", "Liu Association South Section 1",
						"R Corp", "얀샋ㄷ요무", "The Purple Tear", "Xiao", "Dong-hwan the Grade 1 Fixer", "Binah"];
		let facImpuritas = ["Hana Association", "The Black Silence", "The Reverberation Ensemble", "Keter Realization", "The Reverberation Ensemble Distorted"];

		let facNew = ["All"];

		switch(this.state.level){
			case "All":
				facNew = facNew.concat(facCanard, ["Pierre's Bistro", "Streetlight Office"], facLegend,
				facPlague, facNightmare, facStar, facImpuritas);
				break;
			case "Canard": facNew = facNew.concat(facCanard); break;
			case "Urban Myth": facNew = facNew.concat(facMyth); break;
			case "Urban Legend": facNew = facNew.concat(facLegend); break;
			case "Urban Plague": facNew = facNew.concat(facPlague); break;
			case "Urban Nightmare": facNew = facNew.concat(facNightmare); break;
			case "Star of the City": facNew = facNew.concat(facStar); break;
			case "Impuritas Civitatis": facNew = facNew.concat(facImpuritas); break;
			default: break;
		}

		let facChange = this.state.faction;

		if (!facNew.includes(facChange)) facChange = "All"

		// Getting card to show up / Eligible

		const tempPages = cardList.slice();

		let i = 0;
		
		while (i < tempPages.length){
			if ( (this.state.search != null && !tempPages[i].Name.toLowerCase().includes( this.state.search.toLowerCase() ) )
				 || (this.state.level != "All" && tempPages[i].Level != this.state.level) 
				 || (facChange != "All" && tempPages[i].Source != facChange)){
					tempPages.splice(i, 1);
			} else {
				i++;
			}
		}

		tempPages.sort(this.compare)

		this.setState({
			pages: tempPages,
			factionOption: facNew,
			faction: facChange,
		});
	}

  	handleChange(event) {
		if (this.state.typingTimeout) {
			clearTimeout(this.state.typingTimeout);
		}

    	this.setState({
    		[event.target.name]: event.target.value, 
			typing: false,
			loadLimit: 18,
			typingTimeout: setTimeout(
    			() => this.reload(), 5
			)
		});
  	}

	handleScroll(){
		if(document.documentElement.scrollTop + window.innerHeight + 300 > document.documentElement.scrollHeight)
    	{
			let newLimit = this.state.loadLimit + 24;
			if (newLimit > this.state.pages.length) { newLimit = this.state.pages.length }
        	this.setState({loadLimit: newLimit});
    	}
	}

	componentDidMount(){
		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount(){
		window.removeEventListener('scroll', this.handleScroll);
	}

	render() {
		let levelName = ["All", "Canard", "Urban Myth", "Urban Legend", "Urban Plague", "Urban Nightmare",
						"Star of the City", "Impuritas Civitatis"]
	return (
		<div id="combatPages">
			<h1> Combat Pages </h1>

			<div id= "searchHelp">
				<SearchBar search={this.state.search} setSearch={this.handleChange} />
				<SelectBar id="selectLevel" name="level" option={levelName} current={this.state.level} handleChange={this.handleChange}/>
				<SelectBar id="selectFaction" name="faction" option={this.state.factionOption} current={this.state.faction} handleChange={this.handleChange}/>
				<button id="advancedSetting">Advanced</button>
			</div>

			<div id= "pageList" style={{ marginTop: "12vh" }}>
				<div id="Note"> 
					<p> Current Patch: 1.1.0.0b </p>
				</div>
				<ul id="List">
					<LoadPages pages={this.state.pages} limit={this.state.loadLimit}/>
				</ul>
			</div>
		</div>
		);
	}
}

export default CombatPages;