import React from 'react';
import { useState, useEffect } from 'react';

import {Helmet} from "react-helmet";

import SearchBar from '../single/SearchBar.js';
import SelectBar from '../single/SelectBar.js';

import './stylesheets/invitation.scss';
import {levelImage, Icons} from '../../resources/image-icons.js';

import SubScreenInvitation from '../single/LoadInvitation.js';

function LoadBtnInvitation(props){
	console.log(props.level.replace(/[^a-zA-Z]|\s/g, ""));
	return(
		props.invitation.map((invitationName,index) => 
			<button name={invitationName} onClick={props.btnAction} id="InvitationBtn" key={index}> 
				<img name={invitationName} src={ invitationName == "???" ? Icons["FinalReception"] : Icons[invitationName.replace(/[^0-9a-zA-ZáàÀāèěìíīúⅠⅡⅢⅣ얀샋ㄷ요무 ]|\s/g, "")]} />
				{invitationName}
			</button>
		)
	)
} 

class Invitation extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            search: '',
			typing: false,
    		typingTimeout: 0,
    		level: 'Canard',
			faction: '',
			factionOption: ["Rats", "Yun's Office", "Brotherhood of Iron", "Hook Office"],

			// CSS Help
			listGridColumns: 1,
        };

		this.removeFaction = this.removeFaction.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.changeFaction = this.changeFaction.bind(this);
    }

    reload() {

        // Getting faction/source restriction

		let facCanard = ["Rats", "Yun's Office", "Brotherhood of Iron", "Hook Office"];
		let facMyth = ["Pierre's Bistro", "Streetlight Office", "Backstreets Butchers", "Hook Office Remnants", "Urban Myth-class Syndicate"];
		let facLegend = ["Zwei Association South Section 6", "Stray Dogs", "Molar Office", "Grade 8 Fixers", "Grade 7 Fixers", "Urban Legend-class Office", "Urban Legend-class Syndicate", "Axe Gang"];
		let facPlague = ["The Carnival", "Full-Stop Office", "Dawn Office", "Gaze Office", "Kurokumo Clan", "Musicians of Bremen", "Wedge Office", "Love Town", 
						"Rusted Chains", "Workshop-affiliated Fixers", "Jeong's Office"];
		let facNightmare = ["Sweepers", "Shi Association South Section 2", "The 8 o'Clock Circus", "Puppets", "Index Proselytes", "Smiling Faces", "The Crying Children", 
							"WARP Cleanup Crew", "Seven Association", "Blade Lineage"];
		let facStar = ["The Thumb", "Argalia & The Churches of Gear", "Liu Association South Section 2", "Cane Office", "Index Proxies", "The Red Mist", "Liu Association South Section 1",
						"R Corp", "얀샋ㄷ요무", "The Purple Tear", "Xiao", "R Corp II", "Dong-hwan the Grade 1 Fixer", "Mirae Life Insurance", "Leaflet Workshop", "Night Awls", "The Udjat", "Bayard"];
		let facImpuritas = ["Hana Association", "The Reverberation Ensemble", "The Black Silence", "The Reverberation Ensemble Distorted", "???"];

		let facNew = [];

		let newListGridColumns = 1;

		switch(this.state.level){
			case "All":
				facNew = facNew.concat(facCanard, ["Pierre's Bistro", "Streetlight Office", "Backstreets Butcher"], facLegend,
				facPlague, facNightmare, facStar, facImpuritas);
				break;
			case "Canard": facNew = facNew.concat(facCanard); newListGridColumns = 1; break;
			case "Urban Myth": facNew = facNew.concat(facMyth); newListGridColumns = 1; break;
			case "Urban Legend": facNew = facNew.concat(facLegend); newListGridColumns = 3;break;
			case "Urban Plague": facNew = facNew.concat(facPlague); newListGridColumns = 4; break;
			case "Urban Nightmare": facNew = facNew.concat(facNightmare); newListGridColumns = 4; break;
			case "Star of the City": facNew = facNew.concat(facStar); newListGridColumns = 4; break;
			case "Impuritas Civitatis": facNew = facNew.concat(facImpuritas); newListGridColumns = 1; break;
			default: break;
		}

		this.setState({
			factionOption: facNew,
			listGridColumns: newListGridColumns,
		});
  	}

	removeFaction() {
		this.setState(
			{
				faction: ""
			}
		)
	}

    handleChange(e){
    	this.setState(
            {
    		    [e.target.name]: e.target.value
            },
            () => {
                this.reload();
            }
    	);
  	}

	changeFaction(e){
		e.preventDefault();
		
		this.setState(
            {
    		    faction: e.target.name
            },
            () => {
                this.reload();
            }
    	);
	}

    render(){
        let levelName = ["All", "Canard", "Urban Myth", "Urban Legend", "Urban Plague", "Urban Nightmare",
                    "Star of the City", "Impuritas Civitatis"]

        return (
            <div id="invitation">
                <Helmet>
				    <title>Lor Bookcase - Invitation</title>
			    </Helmet>

                <h1> Invitation </h1>

                <div id="SelectNoteTop">
                    <SelectBar name="level" option={levelName} current={this.state.level} handleChange={this.handleChange}/>
                    <div id="Note" > <p> Current Patch: 1.1.0.2a2 </p> </div>
                </div>

                <div id="InvitationListBoard"> 
					<ul id="InvitationList" style={{ gridTemplateColumns: "repeat(" + this.state.listGridColumns + ", minmax(0,1fr))" }}> {/* repeat(3, minmax(0, 1fr)) */}
						 <LoadBtnInvitation invitation={this.state.factionOption} level={this.state.level} btnAction={this.changeFaction}/>
					</ul>
				</div>

				<SubScreenInvitation name={this.state.faction} removeAct={this.removeFaction}/>
            </div>
        )
    }
}

export default Invitation;